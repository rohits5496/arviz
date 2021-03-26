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
    
      
      
    
      var element = document.getElementById("dd2cc7e9-fd52-4592-97e8-7ed53a68d299");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dd2cc7e9-fd52-4592-97e8-7ed53a68d299' but no matching script tag was found.")
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
                    
                  var docs_json = '{"548e6714-94b7-4d37-963b-6866efc3bb32":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17678","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17665","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17682"}},"id":"17684","type":"CDSView"},{"attributes":{},"id":"17699","type":"Selection"},{"attributes":{},"id":"17647","type":"LinearScale"},{"attributes":{},"id":"17658","type":"PanTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"17685","type":"Span"},{"attributes":{"data_source":{"id":"17676"},"glyph":{"id":"17677"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17678"},"view":{"id":"17680"}},"id":"17679","type":"GlyphRenderer"},{"attributes":{},"id":"17701","type":"Selection"},{"attributes":{"toolbar":{"id":"17704"},"toolbar_location":"above"},"id":"17705","type":"ToolbarBox"},{"attributes":{"children":[{"id":"17705"},{"id":"17703"}]},"id":"17706","type":"Column"},{"attributes":{},"id":"17662","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"17657"},{"id":"17658"},{"id":"17659"},{"id":"17660"},{"id":"17661"},{"id":"17662"},{"id":"17663"},{"id":"17664"}]},"id":"17667","type":"Toolbar"},{"attributes":{"axis":{"id":"17649"},"ticker":null},"id":"17652","type":"Grid"},{"attributes":{"children":[[{"id":"17640"},0,0]]},"id":"17703","type":"GridBox"},{"attributes":{"data_source":{"id":"17682"},"glyph":{"id":"17681"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17684"}},"id":"17683","type":"GlyphRenderer"},{"attributes":{},"id":"17691","type":"BasicTickFormatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"17701"},"selection_policy":{"id":"17700"}},"id":"17682","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"17649"}],"center":[{"id":"17652"},{"id":"17656"}],"height":500,"left":[{"id":"17653"}],"output_backend":"webgl","renderers":[{"id":"17679"},{"id":"17683"},{"id":"17685"},{"id":"17686"}],"title":{"id":"17687"},"toolbar":{"id":"17667"},"toolbar_location":null,"width":500,"x_range":{"id":"17641"},"x_scale":{"id":"17645"},"y_range":{"id":"17643"},"y_scale":{"id":"17647"}},"id":"17640","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17643","type":"DataRange1d"},{"attributes":{"source":{"id":"17676"}},"id":"17680","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17677","type":"Circle"},{"attributes":{"overlay":{"id":"17666"}},"id":"17661","type":"LassoSelectTool"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"17691"},"major_label_policy":{"id":"17692"},"ticker":{"id":"17654"}},"id":"17653","type":"LinearAxis"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"17681","type":"Scatter"},{"attributes":{},"id":"17657","type":"ResetTool"},{"attributes":{},"id":"17692","type":"AllLabels"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17666","type":"PolyAnnotation"},{"attributes":{},"id":"17700","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17694"},"major_label_policy":{"id":"17695"},"ticker":{"id":"17650"}},"id":"17649","type":"LinearAxis"},{"attributes":{},"id":"17663","type":"SaveTool"},{"attributes":{"text":"mu"},"id":"17687","type":"Title"},{"attributes":{},"id":"17695","type":"AllLabels"},{"attributes":{"axis":{"id":"17653"},"dimension":1,"ticker":null},"id":"17656","type":"Grid"},{"attributes":{"toolbars":[{"id":"17667"}],"tools":[{"id":"17657"},{"id":"17658"},{"id":"17659"},{"id":"17660"},{"id":"17661"},{"id":"17662"},{"id":"17663"},{"id":"17664"}]},"id":"17704","type":"ProxyToolbar"},{"attributes":{},"id":"17698","type":"UnionRenderers"},{"attributes":{},"id":"17654","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17665"}},"id":"17659","type":"BoxZoomTool"},{"attributes":{},"id":"17645","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17699"},"selection_policy":{"id":"17698"}},"id":"17676","type":"ColumnDataSource"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17686","type":"Span"},{"attributes":{},"id":"17660","type":"WheelZoomTool"},{"attributes":{},"id":"17641","type":"DataRange1d"},{"attributes":{},"id":"17694","type":"BasicTickFormatter"},{"attributes":{},"id":"17650","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17664","type":"HoverTool"}],"root_ids":["17706"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"548e6714-94b7-4d37-963b-6866efc3bb32","root_ids":["17706"],"roots":{"17706":"dd2cc7e9-fd52-4592-97e8-7ed53a68d299"}}];
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