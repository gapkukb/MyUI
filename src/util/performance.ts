declare global {
  interface Performance {
    memory?: {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
    };
  }
  interface PerformanceEntry {
    initiatorType: string;
    connectEnd: number;
    connectStart: number;
    responseEnd: number;
  }
}
function log(key: string, ...value: any[]) {
  console.log("%c" + key + value, "background-color:blue;color:#fff;border-radius:2px;padding:2px 4px");
}
export function overview() {
  window.onload = function () {
    setTimeout(function () {
      let t = performance.timing;
      log("DNS查询耗时:", (t.domainLookupEnd - t.domainLookupStart).toFixed(0));
      log("TCP链接耗时:", (t.connectEnd - t.connectStart).toFixed(0));
      log("request请求耗时:", (t.responseEnd - t.responseStart).toFixed(0));
      log("解析dom树耗时:", (t.domComplete - t.domInteractive).toFixed(0));
      log("白屏时间:", (t.responseStart - t.navigationStart).toFixed(0));
      log("domready时间:", (t.domContentLoadedEventEnd - t.navigationStart).toFixed(0));
      log("onload时间:", (t.loadEventEnd - t.navigationStart).toFixed(0));
      var m = performance.memory;
      if (m) {
        log("js内存使用占比:", ((m.usedJSHeapSize / m.totalJSHeapSize) * 100).toFixed(2) + "%");
      }
    });
  };
}
export function resourceTiming(type: string, name?: string): void {
  let res = window.performance.getEntriesByType("resource").filter((item) => item.initiatorType === type);
  var target = res.find((i) => i.name === name);
  if (target) {
    log("TCP链接耗时:", (target.connectEnd - target.connectStart).toFixed(0));
    log("加载耗时:", (target.responseEnd - target.startTime).toFixed(0));
  } else {
    log(`查看的资源不存在`);
  }
}
