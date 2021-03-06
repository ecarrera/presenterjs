/**
 * Created by Eduardo Luttinger on 06/09/2017.
 */
var steps = {
    prepare: {
        productName: "PresenterJS",
        message: "A cool tool to explain ur apps step by step",
        class: ""
    },
    step1: {
        id: "step1",
        classesActions: [
            {className: "tetete1", classesToAdd: "tetete", classesToRemove: ""},
        ],
        title: "1",
        text: "Location: RIGHT_BOTTOM, align_horizontal: LEFT   align_vertical:  TOP",
        position: "RIGHT_BOTTOM",
        align_horizontal: "LEFT",
        align_vertical: "TOP",
        button: "GOT IT!",
        indicatorPosition: "bottom-right",
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
        text: "Location: RIGHT_BOTTOM, align_horizontal: RIGHT   align_vertical:  TOP",
        position: "RIGHT_BOTTOM",
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
        text: "Location: RIGHT_BOTTOM, align_horizontal: RIGHT   align_vertical:  BOTTOM",
        position: "RIGHT_BOTTOM",
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
        text: "Location: RIGHT_BOTTOM, align_horizontal: LEFT   align_vertical:  BOTTOM",
        position: "RIGHT_BOTTOM",
        align_horizontal: "LEFT",
        align_vertical: "BOTTOM",
        button: "GOT IT!",
        auxButton: "",
        indicatorPosition: "top-right",
        drawOnTargetAtStart: "elevate",
        drawOnTargetAtEnd: "",
        drawOnSelf: "",
        template: "",
        nextStep: "end",
        kill: "",
        callback: function () {
        }
    },
    end: {
        callback: function () {
            console.log("Finalizo el presentador");
        }
    }
};
