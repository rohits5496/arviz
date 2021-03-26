(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("0b8cd63d-93de-4118-97ad-f296ab93307f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0b8cd63d-93de-4118-97ad-f296ab93307f' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"b85b6024-8500-4285-9354-f227323b94c0":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"data_source":{"id":"14186"},"glyph":{"id":"14185"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14188"}},"id":"14187","type":"GlyphRenderer"},{"attributes":{},"id":"14159","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14174","type":"BoxAnnotation"},{"attributes":{},"id":"14201","type":"Selection"},{"attributes":{},"id":"14194","type":"AllLabels"},{"attributes":{},"id":"14169","type":"WheelZoomTool"},{"attributes":{},"id":"14150","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"14166"},{"id":"14167"},{"id":"14168"},{"id":"14169"},{"id":"14170"},{"id":"14171"},{"id":"14172"},{"id":"14173"}]},"id":"14176","type":"Toolbar"},{"attributes":{"children":[[{"id":"14149"},0,0]]},"id":"14203","type":"GridBox"},{"attributes":{},"id":"14167","type":"PanTool"},{"attributes":{},"id":"14152","type":"DataRange1d"},{"attributes":{"source":{"id":"14186"}},"id":"14188","type":"CDSView"},{"attributes":{"children":[{"id":"14205"},{"id":"14203"}]},"id":"14206","type":"Column"},{"attributes":{"text":"centered model - non centered model"},"id":"14189","type":"Title"},{"attributes":{},"id":"14196","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"14204"},"toolbar_location":"above"},"id":"14205","type":"ToolbarBox"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14193"},"major_label_policy":{"id":"14194"},"ticker":{"id":"14163"}},"id":"14162","type":"LinearAxis"},{"attributes":{},"id":"14171","type":"UndoTool"},{"attributes":{},"id":"14172","type":"SaveTool"},{"attributes":{"overlay":{"id":"14175"}},"id":"14170","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"14158"}],"center":[{"id":"14161"},{"id":"14165"}],"height":288,"left":[{"id":"14162"}],"output_backend":"webgl","renderers":[{"id":"14187"}],"title":{"id":"14189"},"toolbar":{"id":"14176"},"toolbar_location":null,"width":432,"x_range":{"id":"14150"},"x_scale":{"id":"14154"},"y_range":{"id":"14152"},"y_scale":{"id":"14156"}},"id":"14149","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14197","type":"AllLabels"},{"attributes":{"formatter":{"id":"14196"},"major_label_policy":{"id":"14197"},"ticker":{"id":"14159"}},"id":"14158","type":"LinearAxis"},{"attributes":{},"id":"14193","type":"BasicTickFormatter"},{"attributes":{},"id":"14166","type":"ResetTool"},{"attributes":{"axis":{"id":"14158"},"ticker":null},"id":"14161","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14175","type":"PolyAnnotation"},{"attributes":{},"id":"14154","type":"LinearScale"},{"attributes":{"overlay":{"id":"14174"}},"id":"14168","type":"BoxZoomTool"},{"attributes":{},"id":"14163","type":"BasicTicker"},{"attributes":{},"id":"14200","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"14173","type":"HoverTool"},{"attributes":{},"id":"14156","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"14176"}],"tools":[{"id":"14166"},{"id":"14167"},{"id":"14168"},{"id":"14169"},{"id":"14170"},{"id":"14171"},{"id":"14172"},{"id":"14173"}]},"id":"14204","type":"ProxyToolbar"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14201"},"selection_policy":{"id":"14200"}},"id":"14186","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14185","type":"Scatter"},{"attributes":{"axis":{"id":"14162"},"dimension":1,"ticker":null},"id":"14165","type":"Grid"}],"root_ids":["14206"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"b85b6024-8500-4285-9354-f227323b94c0","root_ids":["14206"],"roots":{"14206":"0b8cd63d-93de-4118-97ad-f296ab93307f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();