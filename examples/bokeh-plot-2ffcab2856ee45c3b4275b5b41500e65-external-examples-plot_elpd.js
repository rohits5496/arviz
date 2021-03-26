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
    
      
      
    
      var element = document.getElementById("0edcc46e-2df0-47ff-9b97-3de076bf1d8e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0edcc46e-2df0-47ff-9b97-3de076bf1d8e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6f6640fd-9854-456c-a645-5e2f0091bcf9":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"17242","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17254","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"17284"},{"id":"17282"}]},"id":"17285","type":"Column"},{"attributes":{"overlay":{"id":"17254"}},"id":"17249","type":"LassoSelectTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17264","type":"Scatter"},{"attributes":{"axis":{"id":"17241"},"dimension":1,"ticker":null},"id":"17244","type":"Grid"},{"attributes":{"toolbar":{"id":"17283"},"toolbar_location":"above"},"id":"17284","type":"ToolbarBox"},{"attributes":{"toolbars":[{"id":"17255"}],"tools":[{"id":"17245"},{"id":"17246"},{"id":"17247"},{"id":"17248"},{"id":"17249"},{"id":"17250"},{"id":"17251"},{"id":"17252"}]},"id":"17283","type":"ProxyToolbar"},{"attributes":{},"id":"17238","type":"BasicTicker"},{"attributes":{},"id":"17273","type":"AllLabels"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17272"},"major_label_policy":{"id":"17273"},"ticker":{"id":"17242"}},"id":"17241","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17280"},"selection_policy":{"id":"17279"}},"id":"17265","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"17253"}},"id":"17247","type":"BoxZoomTool"},{"attributes":{},"id":"17246","type":"PanTool"},{"attributes":{},"id":"17231","type":"DataRange1d"},{"attributes":{"below":[{"id":"17237"}],"center":[{"id":"17240"},{"id":"17244"}],"height":288,"left":[{"id":"17241"}],"output_backend":"webgl","renderers":[{"id":"17266"}],"title":{"id":"17268"},"toolbar":{"id":"17255"},"toolbar_location":null,"width":432,"x_range":{"id":"17229"},"x_scale":{"id":"17233"},"y_range":{"id":"17231"},"y_scale":{"id":"17235"}},"id":"17228","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17233","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17253","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"17245"},{"id":"17246"},{"id":"17247"},{"id":"17248"},{"id":"17249"},{"id":"17250"},{"id":"17251"},{"id":"17252"}]},"id":"17255","type":"Toolbar"},{"attributes":{},"id":"17248","type":"WheelZoomTool"},{"attributes":{"source":{"id":"17265"}},"id":"17267","type":"CDSView"},{"attributes":{},"id":"17280","type":"Selection"},{"attributes":{},"id":"17276","type":"AllLabels"},{"attributes":{},"id":"17229","type":"DataRange1d"},{"attributes":{"children":[[{"id":"17228"},0,0]]},"id":"17282","type":"GridBox"},{"attributes":{},"id":"17279","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"17275"},"major_label_policy":{"id":"17276"},"ticker":{"id":"17238"}},"id":"17237","type":"LinearAxis"},{"attributes":{},"id":"17245","type":"ResetTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17268","type":"Title"},{"attributes":{},"id":"17235","type":"LinearScale"},{"attributes":{},"id":"17275","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"17237"},"ticker":null},"id":"17240","type":"Grid"},{"attributes":{},"id":"17251","type":"SaveTool"},{"attributes":{"data_source":{"id":"17265"},"glyph":{"id":"17264"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17267"}},"id":"17266","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"17252","type":"HoverTool"},{"attributes":{},"id":"17250","type":"UndoTool"},{"attributes":{},"id":"17272","type":"BasicTickFormatter"}],"root_ids":["17285"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"6f6640fd-9854-456c-a645-5e2f0091bcf9","root_ids":["17285"],"roots":{"17285":"0edcc46e-2df0-47ff-9b97-3de076bf1d8e"}}];
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