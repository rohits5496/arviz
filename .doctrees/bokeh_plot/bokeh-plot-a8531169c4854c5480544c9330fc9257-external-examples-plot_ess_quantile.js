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
    
      
      
    
      var element = document.getElementById("632a4a61-16ea-4210-916c-54ce15301530");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '632a4a61-16ea-4210-916c-54ce15301530' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2352b331-26b8-4b24-b8d3-9c78c53664bc":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17813"},"selection_policy":{"id":"17812"}},"id":"17795","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"17783","type":"HoverTool"},{"attributes":{"source":{"id":"17795"}},"id":"17799","type":"CDSView"},{"attributes":{"text":"sigma"},"id":"17801","type":"Title"},{"attributes":{"toolbar":{"id":"17816"},"toolbar_location":"above"},"id":"17817","type":"ToolbarBox"},{"attributes":{"children":[{"id":"17817"},{"id":"17815"}]},"id":"17818","type":"Column"},{"attributes":{},"id":"17777","type":"PanTool"},{"attributes":{},"id":"17812","type":"UnionRenderers"},{"attributes":{},"id":"17782","type":"SaveTool"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"17805"},"major_label_policy":{"id":"17806"},"ticker":{"id":"17773"}},"id":"17772","type":"LinearAxis"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17800","type":"Span"},{"attributes":{},"id":"17764","type":"LinearScale"},{"attributes":{},"id":"17805","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17784","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17796","type":"Circle"},{"attributes":{},"id":"17806","type":"AllLabels"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17785","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"17759"},0,0]]},"id":"17815","type":"GridBox"},{"attributes":{"data_source":{"id":"17795"},"glyph":{"id":"17796"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17797"},"view":{"id":"17799"}},"id":"17798","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"17772"},"dimension":1,"ticker":null},"id":"17775","type":"Grid"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17808"},"major_label_policy":{"id":"17809"},"ticker":{"id":"17769"}},"id":"17768","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17797","type":"Circle"},{"attributes":{},"id":"17776","type":"ResetTool"},{"attributes":{},"id":"17781","type":"UndoTool"},{"attributes":{"axis":{"id":"17768"},"ticker":null},"id":"17771","type":"Grid"},{"attributes":{},"id":"17762","type":"DataRange1d"},{"attributes":{},"id":"17808","type":"BasicTickFormatter"},{"attributes":{},"id":"17809","type":"AllLabels"},{"attributes":{},"id":"17766","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"17776"},{"id":"17777"},{"id":"17778"},{"id":"17779"},{"id":"17780"},{"id":"17781"},{"id":"17782"},{"id":"17783"}]},"id":"17786","type":"Toolbar"},{"attributes":{"below":[{"id":"17768"}],"center":[{"id":"17771"},{"id":"17775"}],"height":500,"left":[{"id":"17772"}],"output_backend":"webgl","renderers":[{"id":"17798"},{"id":"17800"}],"title":{"id":"17801"},"toolbar":{"id":"17786"},"toolbar_location":null,"width":500,"x_range":{"id":"17760"},"x_scale":{"id":"17764"},"y_range":{"id":"17762"},"y_scale":{"id":"17766"}},"id":"17759","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17779","type":"WheelZoomTool"},{"attributes":{},"id":"17813","type":"Selection"},{"attributes":{"overlay":{"id":"17785"}},"id":"17780","type":"LassoSelectTool"},{"attributes":{},"id":"17760","type":"DataRange1d"},{"attributes":{},"id":"17769","type":"BasicTicker"},{"attributes":{},"id":"17773","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"17786"}],"tools":[{"id":"17776"},{"id":"17777"},{"id":"17778"},{"id":"17779"},{"id":"17780"},{"id":"17781"},{"id":"17782"},{"id":"17783"}]},"id":"17816","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"17784"}},"id":"17778","type":"BoxZoomTool"}],"root_ids":["17818"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"2352b331-26b8-4b24-b8d3-9c78c53664bc","root_ids":["17818"],"roots":{"17818":"632a4a61-16ea-4210-916c-54ce15301530"}}];
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