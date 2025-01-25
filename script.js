// JavaScript code for PayPal payment button
paypal.Buttons({
    createOrder: function(data, actions) {
        // سيتم إنشاء الطلب مع المبلغ الذي سيدفعه المستخدم
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: "0.005" // المبلغ الذي سيدفعه المستخدم
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        // عند الموافقة على الدفع، سيتم تنفيذ هذا الجزء
        return actions.order.capture().then(function(details) {
            // عند نجاح الدفع، سيظهر إشعار للمستخدم ويشكره على الاشتراك
            alert("شكراً على اشتراكك، تم تأكيد الدفع! مرحباً بك في السحب!");
            
            // هنا يمكنك تنفيذ أي عملية أخرى بعد الدفع مثل إرسال بيانات الاشتراك إلى السيرفر أو حفظها في قاعدة بيانات
        });
    },
    onError: function(err) {
        // في حال حدوث أي خطأ أثناء الدفع
        console.error("حدث خطأ أثناء الدفع:", err);
        alert("حدث خطأ أثناء معالجة الدفع، يرجى المحاولة مرة أخرى.");
    }
}).render('#paypal-button-container'); // تحديد المكان الذي سيتم عرض زر الدفع فيه
