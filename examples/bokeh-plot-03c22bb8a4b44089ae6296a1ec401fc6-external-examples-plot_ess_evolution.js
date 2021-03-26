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
    
      
      
    
      var element = document.getElementById("19668dd1-8733-4d1e-b991-a8091de60a8e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '19668dd1-8733-4d1e-b991-a8091de60a8e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a48bcd6d-c952-4c6d-bec1-64438c907978":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"17511","type":"SaveTool"},{"attributes":{"text":"b"},"id":"17548","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17513","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"17501"},"dimension":1,"ticker":null},"id":"17504","type":"Grid"},{"attributes":{},"id":"17553","type":"AllLabels"},{"attributes":{},"id":"17493","type":"LinearScale"},{"attributes":{"source":{"id":"17534"}},"id":"17538","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17564"},"selection_policy":{"id":"17563"}},"id":"17534","type":"ColumnDataSource"},{"attributes":{},"id":"17561","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"17515"}],"tools":[{"id":"17505"},{"id":"17506"},{"id":"17507"},{"id":"17508"},{"id":"17509"},{"id":"17510"},{"id":"17511"},{"id":"17512"}]},"id":"17569","type":"ProxyToolbar"},{"attributes":{"above":[{"id":"17545"}],"below":[{"id":"17497"}],"center":[{"id":"17500"},{"id":"17504"}],"height":500,"left":[{"id":"17501"}],"output_backend":"webgl","renderers":[{"id":"17527"},{"id":"17532"},{"id":"17537"},{"id":"17542"},{"id":"17544"}],"title":{"id":"17548"},"toolbar":{"id":"17515"},"toolbar_location":null,"width":500,"x_range":{"id":"17489"},"x_scale":{"id":"17493"},"y_range":{"id":"17491"},"y_scale":{"id":"17495"}},"id":"17488","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"17539"},"glyph":{"id":"17540"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17541"},"view":{"id":"17543"}},"id":"17542","type":"GlyphRenderer"},{"attributes":{},"id":"17565","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17536","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"17546"},{"id":"17547"}],"location":"center_right","orientation":"horizontal"},"id":"17545","type":"Legend"},{"attributes":{},"id":"17552","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17525","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17531","type":"Line"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17542"},{"id":"17537"}]},"id":"17547","type":"LegendItem"},{"attributes":{},"id":"17495","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17526","type":"Circle"},{"attributes":{"toolbar":{"id":"17569"},"toolbar_location":"above"},"id":"17570","type":"ToolbarBox"},{"attributes":{},"id":"17502","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17530","type":"Line"},{"attributes":{},"id":"17566","type":"Selection"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17544","type":"Span"},{"attributes":{},"id":"17506","type":"PanTool"},{"attributes":{},"id":"17563","type":"UnionRenderers"},{"attributes":{},"id":"17489","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17566"},"selection_policy":{"id":"17565"}},"id":"17539","type":"ColumnDataSource"},{"attributes":{},"id":"17560","type":"Selection"},{"attributes":{},"id":"17508","type":"WheelZoomTool"},{"attributes":{},"id":"17559","type":"UnionRenderers"},{"attributes":{},"id":"17491","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17541","type":"Circle"},{"attributes":{},"id":"17564","type":"Selection"},{"attributes":{"data_source":{"id":"17529"},"glyph":{"id":"17530"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17531"},"view":{"id":"17533"}},"id":"17532","type":"GlyphRenderer"},{"attributes":{},"id":"17510","type":"UndoTool"},{"attributes":{"source":{"id":"17524"}},"id":"17528","type":"CDSView"},{"attributes":{},"id":"17505","type":"ResetTool"},{"attributes":{"axis":{"id":"17497"},"ticker":null},"id":"17500","type":"Grid"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17527"},{"id":"17532"}]},"id":"17546","type":"LegendItem"},{"attributes":{"active_multi":null,"tools":[{"id":"17505"},{"id":"17506"},{"id":"17507"},{"id":"17508"},{"id":"17509"},{"id":"17510"},{"id":"17511"},{"id":"17512"}]},"id":"17515","type":"Toolbar"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17540","type":"Circle"},{"attributes":{"data_source":{"id":"17534"},"glyph":{"id":"17535"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17536"},"view":{"id":"17538"}},"id":"17537","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17513"}},"id":"17507","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17562"},"selection_policy":{"id":"17561"}},"id":"17529","type":"ColumnDataSource"},{"attributes":{},"id":"17498","type":"BasicTicker"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17555"},"major_label_policy":{"id":"17556"},"ticker":{"id":"17498"}},"id":"17497","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17524"},"glyph":{"id":"17525"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17526"},"view":{"id":"17528"}},"id":"17527","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"17512","type":"HoverTool"},{"attributes":{},"id":"17556","type":"AllLabels"},{"attributes":{},"id":"17555","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"17570"},{"id":"17568"}]},"id":"17571","type":"Column"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17552"},"major_label_policy":{"id":"17553"},"ticker":{"id":"17502"}},"id":"17501","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17514","type":"PolyAnnotation"},{"attributes":{"source":{"id":"17529"}},"id":"17533","type":"CDSView"},{"attributes":{"overlay":{"id":"17514"}},"id":"17509","type":"LassoSelectTool"},{"attributes":{"source":{"id":"17539"}},"id":"17543","type":"CDSView"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17535","type":"Line"},{"attributes":{"children":[[{"id":"17488"},0,0]]},"id":"17568","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17560"},"selection_policy":{"id":"17559"}},"id":"17524","type":"ColumnDataSource"},{"attributes":{},"id":"17562","type":"Selection"}],"root_ids":["17571"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"a48bcd6d-c952-4c6d-bec1-64438c907978","root_ids":["17571"],"roots":{"17571":"19668dd1-8733-4d1e-b991-a8091de60a8e"}}];
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