/**
 * Created by Eduardo Luttinger on 01/09/2017.
 */

$(document).ready(function () {

    var steps = {
        prepare: {
            template: "<div id=\"guide-bg\"><div id=\"guide-message\"><div id=\"message-container\"><span id=\"productName\" class=\"product-name\"></span><span id=\"message\"></span></div></div></div>",
            productName: "PresenterJS",
            message: "A cool tool to explain ur apps step by step"
        },
        step1: {
            id: "step1",
            groupClass:"elevate",
            title: "1",
            text: "Location: RIGHT_TOP, align_horizontal: LEFT   align_vertical:  TOP",
            position: "RIGHT_TOP",
            align_horizontal: "LEFT",
            align_vertical: "TOP",
            button: "GOT IT!",
            indicatorPosition: "left-bottom",
            drawOnTargetAtStart: "elevate",
            drawOnTargetAtEnd: "elevate",
            drawOnSelf: "",
            template: "",
            delay: 300,
            nextStep: "step2",
            kill: "",
            callback: function () {
            }
        },
        step2: {
            id: "step1",
            title: "2",
            text: "Location: RIGHT_TOP, align_horizontal: RIGHT   align_vertical:  TOP",
            position: "RIGHT_TOP",
            align_horizontal: "RIGHT",
            align_vertical: "TOP",
            button: "GOT IT!",
            indicatorPosition: "bottom-left",
            drawOnTargetAtStart: "elevate",
            drawOnTargetAtEnd: "",
            drawOnSelf: "",
            template: "",
            nextStep: "step3",
            kill: "",
            callback: function () {
            }
        },
        step3: {
            id: "step1",
            title: "3",
            text: "Location: RIGHT_TOP, align_horizontal: RIGHT   align_vertical:  BOTTOM",
            position: "RIGHT_TOP",
            button: "GOT IT!",
            align_horizontal: "RIGHT",
            align_vertical: "BOTTOM",
            indicatorPosition: "top-left",
            drawOnTargetAtStart: "elevate",
            drawOnTargetAtEnd: "elevate",
            drawOnSelf: "",
            template: "",
            nextStep: "step4",
            kill: "",
            callback: function () {
            }
        },
        step4: {
            id: "step1",
            title: "4",
            text: "Location: RIGHT_TOP, align_horizontal: LEFT   align_vertical:  BOTTOM",
            position: "RIGHT_TOP",
            align_horizontal: "LEFT",
            align_vertical: "BOTTOM",
            button: "GOT IT!",
            indicatorPosition: "top-right",
            drawOnTargetAtStart: "elevate",
            drawOnTargetAtEnd: "",
            drawOnSelf: "",
            template: "",
            nextStep: "step1",
            kill: "",
            callback: function () {
            }
        },
        end: {}
    };

    var presenterJs = new PresenterJS();
    presenterJs.initPresenter(steps);
    //presenterJs.show(steps['step14']);
    presenterJs.runShowCase();
});

