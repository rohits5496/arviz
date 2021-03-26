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
    
      
      
    
      var element = document.getElementById("c1cc9c2c-170f-4201-b086-63dfd54422c9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c1cc9c2c-170f-4201-b086-63dfd54422c9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ebd686dd-613a-461d-a620-87c97eba846b":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"15015","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"14958","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15008"},"selection_policy":{"id":"15007"}},"id":"14972","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14993","type":"Circle"},{"attributes":{"children":[{"id":"15020"},{"id":"15018"}]},"id":"15021","type":"Column"},{"attributes":{"children":[[{"id":"14934"},0,0]]},"id":"15018","type":"GridBox"},{"attributes":{"source":{"id":"14972"}},"id":"14976","type":"CDSView"},{"attributes":{"source":{"id":"14982"}},"id":"14986","type":"CDSView"},{"attributes":{},"id":"15011","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"15019"},"toolbar_location":"above"},"id":"15020","type":"ToolbarBox"},{"attributes":{},"id":"15010","type":"Selection"},{"attributes":{"toolbars":[{"id":"14961"}],"tools":[{"id":"14951"},{"id":"14952"},{"id":"14953"},{"id":"14954"},{"id":"14955"},{"id":"14956"},{"id":"14957"},{"id":"14958"}]},"id":"15019","type":"ProxyToolbar"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"14970","type":"FixedTicker"},{"attributes":{},"id":"15009","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14977"},"glyph":{"id":"14978"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14979"},"view":{"id":"14981"}},"id":"14980","type":"GlyphRenderer"},{"attributes":{},"id":"14999","type":"Title"},{"attributes":{},"id":"14951","type":"ResetTool"},{"attributes":{},"id":"14935","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15012"},"selection_policy":{"id":"15011"}},"id":"14982","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14989","type":"MultiLine"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"14997","type":"Span"},{"attributes":{"source":{"id":"14977"}},"id":"14981","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15016"},"selection_policy":{"id":"15015"}},"id":"14992","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"14960"}},"id":"14955","type":"LassoSelectTool"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14978","type":"MultiLine"},{"attributes":{"axis":{"id":"14947"},"dimension":1,"ticker":null},"id":"14950","type":"Grid"},{"attributes":{"formatter":{"id":"15000"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15001"},"ticker":{"id":"14970"}},"id":"14947","type":"LinearAxis"},{"attributes":{},"id":"14954","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14979","type":"MultiLine"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14960","type":"PolyAnnotation"},{"attributes":{"source":{"id":"14992"}},"id":"14996","type":"CDSView"},{"attributes":{},"id":"14957","type":"SaveTool"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15014"},"selection_policy":{"id":"15013"}},"id":"14987","type":"ColumnDataSource"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14988","type":"MultiLine"},{"attributes":{"below":[{"id":"14943"}],"center":[{"id":"14946"},{"id":"14950"}],"height":500,"left":[{"id":"14947"}],"output_backend":"webgl","renderers":[{"id":"14975"},{"id":"14980"},{"id":"14985"},{"id":"14990"},{"id":"14995"},{"id":"14997"}],"title":{"id":"14999"},"toolbar":{"id":"14961"},"toolbar_location":null,"width":500,"x_range":{"id":"14935"},"x_scale":{"id":"14939"},"y_range":{"id":"14937"},"y_scale":{"id":"14941"}},"id":"14934","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14941","type":"LinearScale"},{"attributes":{},"id":"15016","type":"Selection"},{"attributes":{},"id":"15007","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14994","type":"Circle"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14983","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14959","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"14943"},"ticker":null},"id":"14946","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14984","type":"Circle"},{"attributes":{},"id":"15014","type":"Selection"},{"attributes":{"data_source":{"id":"14982"},"glyph":{"id":"14983"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14984"},"view":{"id":"14986"}},"id":"14985","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"14992"},"glyph":{"id":"14993"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14994"},"view":{"id":"14996"}},"id":"14995","type":"GlyphRenderer"},{"attributes":{},"id":"14939","type":"LinearScale"},{"attributes":{"source":{"id":"14987"}},"id":"14991","type":"CDSView"},{"attributes":{"overlay":{"id":"14959"}},"id":"14953","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14973","type":"Scatter"},{"attributes":{},"id":"15003","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"14972"},"glyph":{"id":"14973"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14974"},"view":{"id":"14976"}},"id":"14975","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"14951"},{"id":"14952"},{"id":"14953"},{"id":"14954"},{"id":"14955"},{"id":"14956"},{"id":"14957"},{"id":"14958"}]},"id":"14961","type":"Toolbar"},{"attributes":{},"id":"15012","type":"Selection"},{"attributes":{},"id":"15013","type":"UnionRenderers"},{"attributes":{"axis_label":"Log","formatter":{"id":"15003"},"major_label_policy":{"id":"15004"},"ticker":{"id":"14944"}},"id":"14943","type":"LinearAxis"},{"attributes":{},"id":"14952","type":"PanTool"},{"attributes":{"data_source":{"id":"14987"},"glyph":{"id":"14988"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14989"},"view":{"id":"14991"}},"id":"14990","type":"GlyphRenderer"},{"attributes":{},"id":"14956","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14974","type":"Scatter"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15010"},"selection_policy":{"id":"15009"}},"id":"14977","type":"ColumnDataSource"},{"attributes":{},"id":"14944","type":"BasicTicker"},{"attributes":{},"id":"15000","type":"BasicTickFormatter"},{"attributes":{"end":0.5,"start":-1.5},"id":"14937","type":"DataRange1d"},{"attributes":{},"id":"15001","type":"AllLabels"},{"attributes":{},"id":"15008","type":"Selection"},{"attributes":{},"id":"15004","type":"AllLabels"}],"root_ids":["15021"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"ebd686dd-613a-461d-a620-87c97eba846b","root_ids":["15021"],"roots":{"15021":"c1cc9c2c-170f-4201-b086-63dfd54422c9"}}];
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