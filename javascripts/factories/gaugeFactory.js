app.factory("gaugeFactory", function(){
	 
	
    let drawGauge = (valIn) => {
        var gauge1 = new RadialGauge({
            renderTo: 'canvas-id',
            width: 300,
            height: 250,
            units: "",
        //title: "",

        startAngle: 90,
        ticksAngle: 180,
        colorPlate: "transparent",
        // colorPlate: "#ffffff",
        //colorPlateEnd: "#ffffff",
        colorUnits: "#3CA7DB",
        colorNumbers: "#534638",
        colorNeedle: "#8E7860",
        colorNeedleEnd: "#8E7860",
        colorNeedleCircleOuter: "#8E7860",
        colorNeedleCircleOuterEnd: "#8E7860",

        colorNeedleShadowUp: "#8E7860",
        colorNeedleShadowDown: "#8E7860",

        colorMajorTicks: ["#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB"],
        colorMinorTicks: "#EBEBEB",

        minValue: 0,
        maxValue: 100,
        majorTicks: ["0","20","40","60","80","100"],
        minorTicks: "2",
        strokeTicks: true,
        highlights: [
        {
            "from": -0.25,
            "to": 39.99,
            "color": "#fa4133"
                // "color": "#FF9488"
                // "color": "#fa4133"
            },
            {
                "from": 39.99,
                "to": 59.99,
                // "color": "#8FB9BD"
                "color": "#fdbe37"
            },
            {  
                "from": 59.99,
                "to": 100.25,
                "color": "#1cb42f"
                // "color": "#B1B9CB"
                // "color": "#1cb42f"
            }
            ],
        //
        highlightsWidth: 25,
        numbersMargin: 12,
        //
        //barWidth: 20,
        //barStrokeWidth: 0,
        //barProgress: 1,
        //barShadow: 0,
        //
        animation: true,
        animationDuration: 1500,
        animationRule: "linear",
        animatedValue: true,
        //animateOnInit: true,

        borders: false,
        valueBox: false,

        needleType: "arrow",
        needleEnd: 65,
        needleWidth: 4,
        needleCircleSize: 10,
        needleCircleInner: false,
        needleCircleOuter: true,
        needleShadow: false,

        borderShadowWidth: 0

    }).draw();



         // gauge1.draw(); 
         // gauge1.renderTo = 
         gauge1.value = valIn;
         gauge1.update();
         // console.log("drawGauge value" , valIn);
     };

     let drawLinearGauge1 = (valIn) => {
        var LinearGauge1 = new LinearGauge({
            renderTo: 'linearCanvas-id1',
            width: 80,
            height: 300,
            units: "%",
            minValue: 0,
            maxValue: 100,
            majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100"
            ],
            minorTicks: 2,
            strokeTicks: true,
            highlights: [
            {
                "from": 80,
                "to": 100,
                "color": "rgba(200, 50, 50, .75)"
            }
            ],
            colorPlate: "#fff",
            borderShadowWidth: 0,
            borders: false,
            needleType: "arrow",
            needleWidth: 5,
            animationDuration: 1500,
            animationRule: "linear",
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            barStrokeWidth: 2,
            barBeginCircle: false,
            value: 0
        }).draw();


         LinearGauge1.value = valIn;
         LinearGauge1.update();
     };

     let drawLinearGauge2 = (valIn) => {

        var LinearGauge2 = new LinearGauge({
            renderTo: 'linearCanvas-id2',
            width: 80,
            height: 300,
            units: "%",
            minValue: 0,
            maxValue: 100,
            majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100"
            ],
            minorTicks: 2,
            strokeTicks: true,
            highlights: [
            {
                "from": 80,
                "to": 100,
                "color": "rgba(200, 50, 50, .75)"
            }
            ],
            colorPlate: "#fff",
            borderShadowWidth: 0,
            borders: false,
            needleType: "arrow",
            needleWidth: 5,
            animationDuration: 1500,
            animationRule: "linear",
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            barStrokeWidth: 2,
            barBeginCircle: false,
            value: 0
        }).draw();

         LinearGauge2.value = valIn;
         LinearGauge2.update();
     };

     //LinearGauge 3//
      let drawLinearGauge3 = (valIn) => {

        var LinearGauge3 = new LinearGauge({
            renderTo: 'linearCanvas-id3',
            width: 80,
            height: 300,
            units: "%",
            minValue: 0,
            maxValue: 100,
            majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100"
            ],
            minorTicks: 2,
            strokeTicks: true,
            highlights: [
            {
                "from": 80,
                "to": 100,
                "color": "rgba(200, 50, 50, .75)"
            }
            ],
            colorPlate: "#fff",
            borderShadowWidth: 0,
            borders: false,
            needleType: "arrow",
            needleWidth: 5,
            animationDuration: 1500,
            animationRule: "linear",
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            barStrokeWidth: 2,
            barBeginCircle: false,
            value: 0
        }).draw();

         // LinearGauge2.draw(); 
         LinearGauge3.value = valIn;
         LinearGauge3.update();
         // console.log("drawLinerGauge value" , valIn);
     };

     //LinearGauge 4//
      let drawLinearGauge4 = (valIn) => {

        var LinearGauge4 = new LinearGauge({
            renderTo: 'linearCanvas-id4',
            width: 80,
            height: 300,
            units: "%",
            minValue: 0,
            maxValue: 100,
            majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100"
            ],
            minorTicks: 2,
            strokeTicks: true,
            highlights: [
            {
                "from": 80,
                "to": 100,
                "color": "rgba(200, 50, 50, .75)"
            }
            ],
            colorPlate: "#fff",
            borderShadowWidth: 0,
            borders: false,
            needleType: "arrow",
            needleWidth: 5,
            animationDuration: 1500,
            animationRule: "linear",
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            barStrokeWidth: 2,
            barBeginCircle: false,
            value: 0
        }).draw();

         // LinearGauge2.draw(); 
         LinearGauge4.value = valIn;
         LinearGauge4.update();
         // console.log("drawLinerGauge value" , valIn);
     };

     //LinearGauge 5//
      let drawLinearGauge5 = (valIn) => {

        var LinearGauge5 = new LinearGauge({
            renderTo: 'linearCanvas-id5',
            width: 80,
            height: 300,
            units: "%",
            minValue: 0,
            maxValue: 100,
            majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100"
            ],
            minorTicks: 2,
            strokeTicks: true,
            highlights: [
            {
                "from": 80,
                "to": 100,
                "color": "rgba(200, 50, 50, .75)"
            }
            ],
            colorPlate: "#fff",
            borderShadowWidth: 0,
            borders: false,
            needleType: "arrow",
            needleWidth: 5,
            animationDuration: 1500,
            animationRule: "linear",
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            barStrokeWidth: 2,
            barBeginCircle: false,
            value: 0
        }).draw();

         // LinearGauge2.draw(); 
         LinearGauge5.value = valIn;
         LinearGauge5.update();
         // console.log("drawLinerGauge value" , valIn);
     };





	
	

	return {drawGauge:drawGauge
          , drawLinearGauge1:drawLinearGauge1
          , drawLinearGauge2:drawLinearGauge2
          , drawLinearGauge3:drawLinearGauge3
          , drawLinearGauge4:drawLinearGauge4
          , drawLinearGauge5:drawLinearGauge5};
		  

});