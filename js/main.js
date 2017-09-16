// method: .methodName();
// function () {
// statements go here
// }
$(document).ready(function() {

    // :eq()    index number selector
    $(".showcase__slides li:eq(0)").show();

    var showcaseCount = 0;

    function changeSlide(slideNum) {
        console.log("changing slidesWHOOOO");
        // reset, turn all off
        $(".showcase__slides li").hide();
        $(".showcase__controls li").removeClass("active");

        // show the correct one
        $(".showcase__slides li:eq(" + slideNum + ")").show();
        $(".showcase__controls li:eq(" + slideNum + ")").addClass("active");
    } // changeSlide function end
    function showcaseIntervalCount() {
        if (showcaseCount >= 2) {
            showcaseCount = 0;
        } else {
            showcaseCount++;
        }
        changeSlide(showcaseCount);
    } // showcaseIntervalCount
    $(".showcase__controls li").click(function() {
        //console.log("dot dot dot!!");
        var dotIndex = $(this).index();
        showcaseCount = dotIndex;
        //console.log(dotIndex);
        changeSlide(dotIndex);
        clearInterval(interval);
    }); // click method end
    var interval = setInterval(showcaseIntervalCount, 5000);

    //console.log("jQuery has been loaded");
    /*$(".box").click(function() {
    	$(this).css({
    		"width" : "600px",
    		"height" : "200px"
    	}); // css method
    	$("body").css({
    		"backgroundColor" : "beige"
    	}); // css method end
    }); // click method end*/

    $(".box").hover(function() {
        $(this).stop().animate({
            "width": "375px",
            //"height" : "300px"
        }); // animate method end
    }, function() {
        $(this).stop().animate({
            "width": "400px",
            //"height" : "400px"
        }); // animate method end
    }); // hover method end

    // slider
    // determine the new width of each slide
    var viewportWidth = $(window).width();

    var visibleSlides;
    if (viewportWidth < 700) {
        visibleSlides = 1;
    } else {
        visibleSlides = 3;
    }

    // parseInt();
    var slideMargin = parseInt($(".slider ul li").css("margin-left")) * 2;
    console.log(slideMargin);
    var sliderWidth = $(".slider").width();
    //console.log(sliderWidth);
    // Order of operations: P E M D A S
    var slideWidth = (sliderWidth - (slideMargin * visibleSlides)) / visibleSlides;
    //console.log(slideWidth);
    $(".slider ul li").css({
        "width": slideWidth + "px"
    }); // css method end

    var currentCount = 0;
    checkArrowDisplay(currentCount);
    var totalSlides = $(".slider ul li").length;
    $(".slider ul").css({
        "width": ((slideWidth + slideMargin) * totalSlides) + "px"
    }); // css method end
    //console.log(totalSlides);

    // assigment
    // count = 0

    // "truthy" conditional
    // count == 0

    // strict conditional
    // count === 0
    // both data type and value

    function checkArrowDisplay(count) {
        if (count === 0) {
            $("#prevBtn").hide();
        } else if (count > 0 && count < totalSlides - 3) {
            $("#prevBtn").show();
            $("#nextBtn").show();
        } else {
            $("#nextBtn").hide();
        } // end if
    } // checkArrowDisplay function end

    $("#nextBtn").click(function(event) {
        //console.log(event);
        event.preventDefault();

        if (currentCount >= totalSlides - 3) {
            currentCount = totalSlides - 3;
        } else {
            currentCount++;
            $(".slider ul").animate({
                "margin-left": "-=" + (slideWidth + slideMargin) + "px"
            }); // animate method end
        } // end if
        checkArrowDisplay(currentCount);
        console.log(slideWidth);
    }); // click method end

    $("#prevBtn").click(function(event) {
        //console.log(event);
        event.preventDefault();
        if (currentCount <= 0) {
            currentCount = 0;
        } else {
            currentCount--;
            $(".slider ul").animate({
                "margin-left": "+=" + (slideWidth + slideMargin) + "px"
            }); // animate method end
        } // end if
        checkArrowDisplay(currentCount);
    }); // click method end
    /*var left = 0;
    left = left - 320;
    //left -= 320;
    left = left + 320;
    //left += 320;
    left = left * 50;
    // left *= 50;
    left = left / 50;
    // left /= 50;*/

    function printGroupName(myName, myPartnersName) {
        console.log("myName +" + "myPartnersName");
    }
    // printGroupName(myName, partnersName);

}); // ready method end