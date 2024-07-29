$(document).ready(function() {

  (function(){
      MktoForms2.loadForm("//info.tenable.com", "934-XQB-568", 7469, function (form) {
          form.setValues({ "LeadSource": "Web Lead", "Lead_Source_Detail__c": "Contact Us Form" });
          form.onSuccess(function (values, followUpUrl) {
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || !window.drift) {
                  location.href = "https://www.tenable.com/products/tenable-one/evaluate/thank-you";
              } else {
                  drift("collectFormData", values, {
                      campaignId: 2825894,
                      followupUrl: "https://www.tenable.com/products/tenable-one/evaluate/thank-you",
                      mapFields: true
                  });
              }
              return false;
          });
      });
      MktoForms2.whenReady(function(form) {
          $('.mktoForm[id="mktoForm_7469"] .mktoField ').each(function(){
              var name_input = $(this).attr('name');
              $(this).closest('.mktoFormRow').addClass('form_'+name_input);
          })
          setTimeout(function(){
              $('.product-get-started__form .mktoFormRow.form_Phone').insertAfter('.product-get-started__form .mktoFormRow.form_Email');
              $('.product-get-started__form .mktoFormRow.form_Employee_Range__c').insertAfter('.product-get-started__form .mktoFormRow.form_Company');
          },50);

          $('.hero-section .mktoForm[id="mktoForm_7469"] #LblFirstName').text('First Name:');
          $('.hero-section .mktoForm[id="mktoForm_7469"] #LblLastName').text('Last Name:');
          $('.hero-section .mktoForm[id="mktoForm_7469"] #LblEmail').text('Email Address:');
          $('.hero-section .mktoForm[id="mktoForm_7469"] #LblComments__c').text('Comments (Limite…');
          $('.hero-section .mktoForm[id="mktoForm_7469"] button[type="submit"]').text('Try for free');

          $('.hero-section .mktoForm[id="mktoForm_7469"] select option').first().text('');
          $('.hero-section .mktoForm[id="mktoForm_7469"] select option').first().hide();
          
          $('.hero-section p.gdpr-text').parent().addClass('gdpr-row');

          $('.mktoForm[id="mktoForm_7469"] input:not([name="triggerGDPR"]), .mktoForm[id="mktoForm_7469"] textarea').on('focus', function() {
              $(this).closest('.mktoFieldWrap').addClass('focused');
              $(this).closest(".mktoFieldWrap").addClass("typing");
          });
          var targetNodes = document.querySelectorAll('.mktoFieldWrap');
          var config = {
              attributes: true,
              childList: true,
              subtree: true
          };
          var callback = function(mutationsList, observer) {
              jQuery('.mktoFieldWrap').each(function() {
                  if (jQuery(this).find('.mktoError').length > 0 && jQuery(this).find('.mktoError').attr('style').indexOf('none') == -1) {
                      jQuery(this).addClass('error-in');
                  } else {
                      jQuery(this).removeClass('error-in');
                  }
              });
          };
          var observer = new MutationObserver(callback);
          for (var i = 0; i < targetNodes.length; i++) {
              observer.observe(targetNodes[i], config);
          }
          $('.mktoForm[id="mktoForm_7469"] input:not([name="triggerGDPR"]), .mktoForm[id="mktoForm_7469"] textarea, .mktoForm[id="mktoForm_7469"] select').on("blur", function() {
              $(this).closest(".mktoFieldWrap").removeClass("typing");
              if ($(this).val() != '') {
                  if ($(this).hasClass('mktoInvalid')) {
                      $(this).closest('.mktoFieldWrap').removeClass('focused');
                  }
                  $(this).closest('.mktoFieldWrap').addClass('filled');
              } else {
                  $(this).closest('.mktoFieldWrap').removeClass('filled');
                  $(this).closest('.mktoFieldWrap').removeClass('focused');
              }
          });
          $(document).on('focus', '.mktoForm[id="mktoForm_7469"] select.mktoField', function(e) {
              $(this).closest('.mktoFieldWrap').addClass("focused");
              $(this).closest('.mktoFieldWrap').addClass("typing");
              $(this).click();
          });
      
          $(document).on('click', '.mktoForm[id="mktoForm_7469"] select#LblEmployee_Range__c', function(e) {
              $('.mktoForm[id="mktoForm_7469"] select[name="Employee_Range__c"]').trigger();
          });
          $(document).on('blur', '.mktoForm[id="mktoForm_7469"] select.mktoField', function(e) {
              if ($(this).val() == '') {
                  $(this).closest('.mktoFieldWrap').removeClass("focused");
                  $(this).closest('.mktoFieldWrap').removeClass("typing");
              };
          });

      });

    //scroll to video
    var nextspace = 20;
    jQuery('.hero-section-cta .btn').on('click', function() {
        jQuery('html,body').animate({
        scrollTop: jQuery(".about-section .about-section-video").offset().top - nextspace}, 'slow');
    });

    // Accordian
    jQuery('.risks-section .faq-title').first().addClass('open');
    jQuery('.risks-section').on('click', '.faq-title', function (e) {
        const that = jQuery(this);
        jQuery('.risks-section .faq-title').not(this)
            .removeClass('open')
            .next()
            .slideUp();

        that.toggleClass('open', !that.hasClass('open'))
            .next()
            .slideToggle(500);
        // Change Left Image In Accordian
        var index = that.parent().index();
        jQuery('.risks-section .faq-img').removeClass('open').eq(index).addClass('open');

        if(e.hasOwnProperty('originalEvent')){
            clearInterval(autoTimeout);
            clearInterval(autoPlayTimer);
            
            if(jQuery('.risks-section .selected')){
                jQuery('.risks-section .faq-title.selected').removeClass('selected');
            }
            jQuery('.risks-section .faq-title.open').addClass('selected');
            autoTimeout = setTimeout(()=>{
                autoPlayTimer = setInterval(()=>{
                    autoPlayAccordion()
                    if(jQuery('.risks-section .selected')){
                        jQuery('.risks-section .faq-title.selected').removeClass('selected');
                    }
                }, 5000);
            }, 7000);
        }
    });

    //auto play accordion
    function autoPlayAccordion() {
        var current = jQuery('.risks-section .faq-title.open').parent().index();
        var next = current + 1;
        if (next >= jQuery('.risks-section .faq-title').length) {
            next = 0;
        }
        jQuery('.risks-section .faq-title').eq(next).click();
    }
    var autoTimeout;
    var autoPlayTimer = setInterval(()=>{
        autoPlayAccordion()
    }, 5000);

  })();
});