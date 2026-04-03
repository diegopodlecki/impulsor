type AnalyticsWindow = Window &
  typeof globalThis & {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  };

function getWindow() {
  return window as AnalyticsWindow;
}

function safeId(value: string | undefined) {
  return typeof value === "string" && value.trim() && !value.includes("%") ? value.trim() : "";
}

type GtagCommand = "event" | "config" | "js" | "set";

function pushGtag(command: GtagCommand, action: string | Date, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag(command, action as never, params);
}

function recordEvent(eventName: string, params?: Record<string, unknown>) {
  pushGtag("event", eventName, params);
}

export const analytics = {
  pageView(path: string, title?: string) {
    recordEvent("page_view", {
      page_path: path,
      page_title: title ?? document.title,
      page_location: window.location.href,
    });
  },

  whatsappClick(source: string) {
    recordEvent("whatsapp_click", {
      event_category: "conversion",
      event_label: source,
      value: 1,
    });
  },

  demoClick(demo: string) {
    recordEvent("demo_view", {
      event_category: "engagement",
      event_label: demo,
    });
  },

  pricingInterest(plan: string) {
    recordEvent("pricing_click", {
      event_category: "conversion",
      event_label: plan,
      value: 1,
    });
  },

  faqOpen(question: string) {
    recordEvent("faq_open", {
      event_category: "engagement",
      event_label: question.substring(0, 50),
    });
  },

  scrollDepth(depth: 25 | 50 | 75 | 100) {
    recordEvent("scroll_depth", {
      event_category: "engagement",
      event_label: `${depth}%`,
      value: depth,
    });
  },

  timeOnPage(seconds: number) {
    recordEvent("time_on_page", {
      event_category: "engagement",
      event_label: `${seconds}s`,
      value: seconds,
    });
  },
};

export function getAnalyticsIds() {
  return {
    ga4Id: safeId(import.meta.env.VITE_GA4_ID as string | undefined),
    metaPixelId: safeId(import.meta.env.VITE_META_PIXEL_ID as string | undefined),
    clarityId: safeId(import.meta.env.VITE_CLARITY_ID as string | undefined),
    hotjarSiteId: safeId(import.meta.env.VITE_HOTJAR_SITE_ID as string | undefined),
    hotjarVersion: safeId(import.meta.env.VITE_HOTJAR_VERSION as string | undefined),
  };
}

export function injectExternalScript(id: string, src: string) {
  if (document.querySelector(`script[data-analytics-id="${id}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = src;
  script.dataset.analyticsId = id;
  document.head.appendChild(script);
}

export function installGa4(ga4Id: string) {
  if (!ga4Id) return;

  const win = getWindow();
  if (win.gtag) return;

  win.dataLayer = win.dataLayer || [];
  win.gtag = function gtag(...args: unknown[]) {
    win.dataLayer.push(args);
  };

  injectExternalScript(`ga4-${ga4Id}`, `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`);
  win.gtag("js", new Date());
  win.gtag("config", ga4Id, {
    send_page_view: false,
    anonymize_ip: true,
  });
}

export function installMetaPixel(metaPixelId: string) {
  if (!metaPixelId) return;

  const win = getWindow();
  if (win.fbq) return;

  win.fbq = function fbq(...args: unknown[]) {
    (win.fbq as unknown[] & { queue?: unknown[] }).queue = (win.fbq as unknown[] & { queue?: unknown[] }).queue || [];
    (win.fbq as unknown[] & { queue?: unknown[] }).queue?.push(args);
  };

  injectExternalScript(
    `meta-pixel-${metaPixelId}`,
    "https://connect.facebook.net/en_US/fbevents.js",
  );

  win.fbq("init", metaPixelId);
}

export function installClarity(clarityId: string) {
  if (!clarityId) return;

  if ((window as AnalyticsWindow).clarity) return;

  injectExternalScript("clarity", `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`);
}

export function installHotjar(siteId: string, version: string) {
  if (!siteId || !version) return;

  const hotjarKey = `hotjar-${siteId}-${version}`;
  if (document.querySelector(`script[data-analytics-id="${hotjarKey}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.dataset.analyticsId = hotjarKey;
  script.text = `
    (function(h,o,t,j,a,r){
      h.hj = h.hj || function(){(h.hj.q = h.hj.q || []).push(arguments)};
      h._hjSettings = {hjid:${Number(siteId)}, hjsv:${Number(version)}};
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  `;
  document.head.appendChild(script);
}

export function trackPageView(path: string, title?: string) {
  analytics.pageView(path, title);

  const win = getWindow();
  win.fbq?.("track", "PageView");
}

export function trackWhatsAppClick(origin: string, label: string, url?: string) {
  const win = getWindow();
  analytics.whatsappClick(origin);
  win.fbq?.("track", "Contact", {
    content_name: label,
    content_category: origin,
  });
}

export function trackFormSubmit(params: {
  formName: string;
  status: "success" | "failure";
  channel?: string;
  label?: string;
  errorMessage?: string;
}) {
  const win = getWindow();

  win.gtag?.("event", "form_submit", {
    form_name: params.formName,
    status: params.status,
    channel: params.channel ?? "form",
    label: params.label ?? params.formName,
    error_message: params.errorMessage ?? "",
  });

  if (params.status === "success") {
    win.fbq?.("track", "Lead", {
      content_name: params.formName,
      content_category: params.channel ?? "form",
    });
  }
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 100, path: string) {
  analytics.scrollDepth(depth);
}

export function trackEngagement60s(path: string) {
  analytics.timeOnPage(60);
}

export function trackCtaClick(label: string, origin?: string, href?: string) {
  const win = getWindow();

  win.gtag?.("event", "cta_click", {
    label,
    origin: origin ?? "unknown",
    link_url: href ?? "",
  });
}
