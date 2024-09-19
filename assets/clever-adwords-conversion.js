function getScript(source, callback) {
      var script = document.createElement('script');
      var prior = document.getElementsByTagName('script')[0];
      script.async = 1;

      script.onload = script.onreadystatechange = function( _, isAbort ) {
        if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
          script.onload = script.onreadystatechange = null;
          script = undefined;

          if(!isAbort && callback) setTimeout(callback, 0);
        }
      };

      script.src = source;
      prior.parentNode.insertBefore(script, prior);
      };

      getScript('https://www.googletagmanager.com/gtag/js?id=AW-362769693', function(){


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-362769693');


if (!localStorage.getItem(`ORDER_${Shopify.checkout.order_id}_COMPLETED`) && window.location.href.includes('/thank_you')) { localStorage.setItem(`ORDER_${Shopify.checkout.order_id}_COMPLETED`, true);          gtag('event', 'conversion', {      'send_to': 'AW-362769693/CpVUCOL6tMoZEJ3a_awB',      'value': Shopify.checkout.subtotal_price / 100.0,      'currency': Shopify.checkout.currency,      'transaction_id': Shopify.checkout.order_id  });}});
  