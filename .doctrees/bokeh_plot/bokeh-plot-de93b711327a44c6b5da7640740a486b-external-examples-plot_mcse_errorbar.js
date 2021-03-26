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
    
      
      
    
      var element = document.getElementById("5cb23553-c3cc-4193-8a9b-b8e1bac0670f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5cb23553-c3cc-4193-8a9b-b8e1bac0670f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e91fef6b-ae44-41e8-9b87-1c437817c699":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35679"},"selection_policy":{"id":"35678"}},"id":"35657","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35663","type":"MultiLine"},{"attributes":{"source":{"id":"35657"}},"id":"35661","type":"CDSView"},{"attributes":{"axis":{"id":"35630"},"ticker":null},"id":"35633","type":"Grid"},{"attributes":{"data_source":{"id":"35657"},"glyph":{"id":"35658"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35659"},"view":{"id":"35661"}},"id":"35660","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35659","type":"Scatter"},{"attributes":{"children":[[{"id":"35621"},0,0]]},"id":"35683","type":"GridBox"},{"attributes":{"data_source":{"id":"35662"},"glyph":{"id":"35663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35664"},"view":{"id":"35666"}},"id":"35665","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"35681"},"selection_policy":{"id":"35680"}},"id":"35662","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35646","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"35630"}],"center":[{"id":"35633"},{"id":"35637"}],"height":500,"left":[{"id":"35634"}],"output_backend":"webgl","renderers":[{"id":"35660"},{"id":"35665"}],"title":{"id":"35667"},"toolbar":{"id":"35648"},"toolbar_location":null,"width":500,"x_range":{"id":"35622"},"x_scale":{"id":"35626"},"y_range":{"id":"35624"},"y_scale":{"id":"35628"}},"id":"35621","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35680","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"35645","type":"HoverTool"},{"attributes":{},"id":"35622","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35658","type":"Scatter"},{"attributes":{},"id":"35681","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35664","type":"MultiLine"},{"attributes":{},"id":"35641","type":"WheelZoomTool"},{"attributes":{"source":{"id":"35662"}},"id":"35666","type":"CDSView"},{"attributes":{"text":"sigma_a"},"id":"35667","type":"Title"},{"attributes":{"toolbars":[{"id":"35648"}],"tools":[{"id":"35638"},{"id":"35639"},{"id":"35640"},{"id":"35641"},{"id":"35642"},{"id":"35643"},{"id":"35644"},{"id":"35645"}]},"id":"35684","type":"ProxyToolbar"},{"attributes":{},"id":"35643","type":"UndoTool"},{"attributes":{"toolbar":{"id":"35684"},"toolbar_location":"above"},"id":"35685","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35647","type":"PolyAnnotation"},{"attributes":{},"id":"35624","type":"DataRange1d"},{"attributes":{},"id":"35628","type":"LinearScale"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"35671"},"major_label_policy":{"id":"35672"},"ticker":{"id":"35635"}},"id":"35634","type":"LinearAxis"},{"attributes":{},"id":"35631","type":"BasicTicker"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35674"},"major_label_policy":{"id":"35675"},"ticker":{"id":"35631"}},"id":"35630","type":"LinearAxis"},{"attributes":{},"id":"35671","type":"BasicTickFormatter"},{"attributes":{},"id":"35626","type":"LinearScale"},{"attributes":{"axis":{"id":"35634"},"dimension":1,"ticker":null},"id":"35637","type":"Grid"},{"attributes":{},"id":"35672","type":"AllLabels"},{"attributes":{},"id":"35635","type":"BasicTicker"},{"attributes":{"overlay":{"id":"35646"}},"id":"35640","type":"BoxZoomTool"},{"attributes":{},"id":"35639","type":"PanTool"},{"attributes":{},"id":"35674","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"35647"}},"id":"35642","type":"LassoSelectTool"},{"attributes":{},"id":"35638","type":"ResetTool"},{"attributes":{},"id":"35678","type":"UnionRenderers"},{"attributes":{},"id":"35644","type":"SaveTool"},{"attributes":{"children":[{"id":"35685"},{"id":"35683"}]},"id":"35686","type":"Column"},{"attributes":{},"id":"35675","type":"AllLabels"},{"attributes":{},"id":"35679","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"35638"},{"id":"35639"},{"id":"35640"},{"id":"35641"},{"id":"35642"},{"id":"35643"},{"id":"35644"},{"id":"35645"}]},"id":"35648","type":"Toolbar"}],"root_ids":["35686"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"e91fef6b-ae44-41e8-9b87-1c437817c699","root_ids":["35686"],"roots":{"35686":"5cb23553-c3cc-4193-8a9b-b8e1bac0670f"}}];
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