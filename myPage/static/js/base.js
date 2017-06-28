$(window).scroll(function() {
  var $OT = $('#ozie-title');
    if ($(window).scrollTop() > 250){
      $navi.css({
        'position': 'fixed',
        'top': '0px'
      });
    }else{
      $navi.css({
        'position': 'relative'
      });
    }
});


       



// random bitmoji pic in intro //
window.onload = chooseBitmoji;

var myPix = new Array("static/images/bitmoji/1.png","static/images/bitmoji/2.png","static/images/bitmoji/3.png","static/images/bitmoji/4.png","static/images/bitmoji/5.png","static/images/bitmoji/6.png","static/images/bitmoji/7.png","static/images/bitmoji/8.png","static/images/bitmoji/9.png","static/images/bitmoji/10.png","static/images/bitmoji/11.png","static/images/bitmoji/12.png",);

function chooseBitmoji() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("intro_bitmoji").src = myPix[randomNum];
}

/////////////////////////

// key functionality //

function theKey(i){
  var count = [];
  
  $('.title-letter').each(function () {
      var color = $(this).css('color');
      if (color == 'rgb(255, 173, 51)') {
          count.push(1)
          if (count.length == 4) {
            $('.title-letter').css({ position:'relative',fontSize:"70px",left:'75px'});
            $('#key').append(document.getElementById('o'))
            $('#key').append(document.getElementById('i'))
            $('#key').append(document.getElementById('z'))
            $('#key').append(document.getElementById('e'))
            $('#key').css({borderColor:'rgba(0,0,0,0)'})
            // $('#chamber').css({position:'static'})

            $('#key').animate({deg: -90}, {
                duration: 1000,
                step: function(now){
                    $('#key').css({
                         transform: "rotate(" + now + "deg)"
                    });
                }
            })
            $("#key").animate({left: '-150px'})
            $("#chamber-rules").hide("slide", { direction: "right" }, 1000);
          }
        }
  });
}

$(function(){
    $( "#o" ).draggable({
      containment: "#theThik"
    });

    $('#o_key').droppable({
        accept: "#o",
        drop: function(event, ui) {
            $('#o').animate({color: "#ffad33"});
            $('#o').draggable('disable');
            $('#o_key').animate({backgroundColor:'rgba(0,0,0,0)'});
            setTimeout(function() { theKey('#o') }, 2000)
        }
    });
});
$(function(){
    $( "#z" ).draggable({
      containment: "#theThik"
    });

    $('#z_key').droppable({
        accept: "#z",
        drop: function(event, ui) {
            $('#z').animate({color: "#ffad33"});
            $('#z').draggable('disable');
            $('#z_key').animate({backgroundColor:'rgba(0,0,0,0)'});
            setTimeout(function() { theKey('#z') }, 2000)
        }
    });
});
$(function(){
    $( "#i" ).draggable({
      containment: "#theThik"
    });

    $('#i_key').droppable({
        accept: "#i",
        drop: function(event, ui) {
            $('#i').animate({color: "#ffad33"});
            $('#i').draggable('disable');
            $('#i_key').animate({backgroundColor:'rgba(0,0,0,0)'});
            setTimeout(function() { theKey('#i') }, 2000)
        }
    });
});
$(function(){
    $( "#e" ).draggable({
      containment: "#theThik"
    });

    $('#e_key').droppable({
        accept: "#e",
        drop: function(event, ui) {
            $('#e').animate({color: "#ffad33"});
            $('#e').draggable('disable');
            $('#e_key').animate({backgroundColor:'rgba(0,0,0,0)'});
            setTimeout(function() { theKey('#e') }, 2000)
        }
    });
});

function map_init_basic (map, options) {

  var pin = L.icon({
        iconUrl: 'http://www.haipic.com/icon/30660/30660.png',
        iconSize: [30, 30], // size of the icon
  });


  var bigHouse = L.marker([37.8310, -79.5620], {icon: pin}).addTo(map);
  bigHouse.bindPopup(L.popup().setContent('<iframe width="250" height="250" src="https://www.youtube.com/embed/8DSdWSNYzYY" frameborder="0" allowfullscreen></iframe>'));

  var Lazlos = L.marker([38.2673, -77.4524], {icon: pin}).addTo(map);
  Lazlos.bindPopup(L.popup().setContent('<iframe width="250" height="250" src="https://www.youtube.com/embed/v0WI2N2ISkI" frameborder="0" allowfullscreen></iframe>'));


}

///////////////////////////////

$(document).ready(function () {
          $('#headerBOX').show("fade", 1000);
          $('#ozie-title').delay(800).show("slide", { direction: "left", easing: 'easeOutExpo'}, 2000);
          $('#chamber').delay(1000).show("fade", 1200);
          $('#mapBuffer').delay(2000).animate({marginTop:'40px'}, {duration: 1200, easing: 'easeOutBounce'});
          $('#meChart').delay(2200).animate({marginTop:'60px'}, {duration: 1200, easing: 'easeOutBounce'});



//////////// Donut Graph ///////////////


var data_computing =  [
                        {"set":"Computing", "skill":"Django", "value":94},
                        {"set":"Computing", "skill":"Bootstrap", "value":89},
                        {"set":"Computing", "skill":"Javascript", "value":78},
                        {"set":"Computing", "skill":"Jquery", "value":95},
                        {"set":"Computing", "skill":"JqueryUI", "value":92},
                        {"set":"Computing", "skill":"Leaflet", "value":96},
                        {"set":"Computing", "skill":"AngularJS", "value":45},
                        {"set":"Computing", "skill":"PostgreSQL", "value":21},
                        {"set":"Computing", "skill":"Unity3D", "value":15},
                        {"set":"Computing", "skill":"C#", "value":12},
                        {"set":"Computing", "skill":"NodeJS", "value":62}
                      ];

var data_personality= [
                        {"set":"Personality", "skill":"Leader", "value":87},
                        {"set":"Personality", "skill":"Creative", "value":95},
                        {"set":"Personality", "skill":"Innovator", "value":91},
                        {"set":"Personality", "skill":"Strategic", "value":82},
                        {"set":"Personality", "skill":"Teacher", "value":82},
                        {"set":"Personality", "skill":"Optimistic", "value":100},
                        {"set":"Personality", "skill":"Motivational", "value":96},
                        {"set":"Personality", "skill":"Team Player", "value":93},
                        {"set":"Personality", "skill":"Improvisor", "value":99},
                        {"set":"Personality", "skill":"Mediator", "value":80},
                        {"set":"Personality", "skill":"Spontanious", "value":89}
                      ];

var data_interests =  [
                        {"set":"Interests", "skill":"Outdoors", "value":88},
                        {"set":"Interests", "skill":"Backpacking", "value":100},
                        {"set":"Interests", "skill":"Writing", "value":39},
                        {"set":"Interests", "skill":"Virtual Reality", "value":93},
                        {"set":"Interests", "skill":"Meditation", "value":79},
                        {"set":"Interests", "skill":"Arcades", "value":61},
                        {"set":"Interests", "skill":"Improv / Acting", "value":83},
                        {"set":"Interests", "skill":"Hackathons", "value":95},
                        {"set":"Interests", "skill":"Adobe Premiere", "value":51},
                        {"set":"Interests", "skill":"Traveling", "value":84},
                        {"set":"Interests", "skill":"Marvel Comics", "value":70}
                      ];

    console.log(data_computing)
    console.log(data_personality)
    console.log(data_interests)
       


  var width = 400,
      height = 400,
      radius = Math.min(width, height) / 2;

  var color = d3.scale.category20c();

  var arc = d3.svg.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70);

  var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) {
          return d.value;
      });


  var svg = d3.select("#meChart").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("id", "pieChart")
      .attr("transform", "translate(" + width/2  + "," + height/2  + ")")
      .attr("stroke","rgba(255,255,255,1)")          
      .attr("stroke-width",2);

  var path = svg.selectAll("path")
      .data(pie(data_computing))
      .enter()
      .append("path")
      .on("mouseenter", function(d) {
          var arcOver = d3.svg.arc()
              .outerRadius(radius).innerRadius(radius-60);
          d3.select(this)
              .transition()
              .duration(250)
              .attr("d", arcOver);
              
          svg.selectAll("text").remove();
          
          svg.append('text')
              .attr('class', 'center-txt value')
              .attr('y', radius * -0.1)
              .attr('text-anchor', 'middle')
              // .style('font-weight', 'bold')
              .style('font-size', '32px')
              .text(d.data.skill)
              .attr("stroke-width", 0);

          svg.append('text')
              .attr('class', 'center-txt value')
              .attr('y', radius * 0.1)
              .attr('text-anchor', 'middle')
              // .style('font-weight', 'bold')
              .style('font-size', '24px')
              .text("Score: " + d.value + "%")
              .attr("stroke-width", 0);
      })
      .on("mouseleave", function(d) {
          d3.select(this)
              .transition()
              .duration(250)
              .attr("d", arc);

          svg.selectAll("text").remove();

          svg.append('text')
              .attr('class', 'center-txt value')
              .attr('y', radius * -0.1)
              .attr('text-anchor', 'middle')
              // .style('font-weight', 'bold')
              .style('font-size', '32px')
              .text("My STATS")
              .attr("stroke-width", 0);
              
      })

  svg.append('text')
      .attr('class', 'center-txt value')
      .attr('y', radius * -0.1)
      .attr('text-anchor', 'middle')
      // .style('font-weight', 'bold')
      .style('font-size', '32px')
      .text("My STATS")
      .attr("stroke-width", 0);

  path.transition()
      .duration(500)
      .attr("fill", function(d, i) {
          return color(d.data.skill);
      })
      .attr("d", arc)
      .each(function(d) {
          this._current = d;
      }); // store the initial angles

  $('#radComputing').change(function () {
      path.data(pie(data_computing));
      path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
  });

  $('#radPersonality').change(function () {
      path.data(pie(data_personality));
      path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
  });

  $('#radInterests').change(function () {
      path.data(pie(data_interests));
      path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
  });

  // Store the displayed angles in _current.
  // Then, interpolate from _current to the new angles.
  // During the transition, _current is updated in-place by d3.interpolate.

  function arcTween(a) {
      var i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
          return arc(i(t));
      };
  }

}); 
      // var w = 550;
      // var h = 550;
      // var r = w/2 - 55;
      // var origin_top = 225;
      // var origin_left = r + 21;
      // var color = d3.scale.ordinal().range([ "#006495", "#E0A025", "#0093D1", "#F4D00C", "#004C70", "#F2635F"]);;
      // var totalUploaded = [];
      // var totalUnconflated = [];

      // var vis = d3.select('#meChart').append("svg:svg").data([me_data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + origin_left + "," + origin_top + ")");

      // var pie = d3.layout.pie().value(function(d){return d.total;}).sort(null);

      // var arc = d3.svg.arc().outerRadius(r).innerRadius(r*.7);

      // var arcs = vis.selectAll('path')
      //           .data(pie(data))
      //           .enter()
      //           .append('path')
      //           .on( "click", function(d,i) {window.location.href='midb_cat.html?catCode=' + d.data.midb_cat;})
      //           .attr('d', arc)
      //           .attr('fill', function (d, i) {
      //           return color(d.data.midb_cat);
      //           })
      //           .each(function (d) {
      //               this._current = d;
      //           })
      //   .on("mouseenter", function(d) {   
      //     var endAngle = d.endAngle + 0.2;
      //     var startAngle = d.startAngle - 0.2;
      //     var arcOver = d3.svg.arc()
      //         .outerRadius(r + 15).innerRadius(r*.7);
      //     var conflated = d3.select(this).datum().data.total - d3.select(this).datum().data.unconflated
                 
      //       d3.select(this)
      //          .transition()
      //          .duration(250)
      //          .attr("d", arcOver)            
      //          .attr("stroke-width",1);
      //       centerText.text( "Catcode #" + d3.select(this).datum().data.midb_cat );
      //       centerText2.text( d3.select(this).datum().data.total + " Uploads");
      //       centerText3.text( "[ " + conflated + " Conflated ]");    
      //   })
      //   .on("mouseleave", function(d) {
      //       d3.select(this).transition()            
      //          .attr("d", arc)
      //          .ease("bounce")
      //          .duration(500)
      //          .attr("stroke","none");
      //       // centerText.text( "" );
      //       // centerText2.text( "" );
      //       // centerText3.text( "" );
      //       totalUploaded=[];
      //       totalUnconflated=[];
      //       centerText.text(function(d) {  
      //               allCats = d.length + " Catcodes";
      //               return allCats
      //           })
      //           centerText2.text(function(d) {
      //               for (a = 0; a < d.length; a++) {
      //                 totalUploaded.push(d[a].total);
      //               };
      //               allUploads = eval(totalUploaded.join("+")) + " Total Uploads";  
      //               return allUploads;
      //           })
      //           centerText3.text(function(d) {
      //               for (a = 0; a < d.length; a++) {
      //                 totalUnconflated.push(d[a].unconflated);
      //               };
      //               allConflated = eval(totalUploaded.join("+")) - eval(totalUnconflated.join("+"));
      //               allConflated = "[ " + allConflated + " Conflated ]";  
      //               return allConflated;
      //           })
      //   });

      // var centerText = vis.append("text")
      //                   .attr('y', r * -0.08)
      //                   .style("text-anchor", "middle")
      // var centerText2 = vis.append("text")
      //                   .attr('y', r * 0.04)
      //                   .style("text-anchor", "middle")
      // var centerText3 = vis.append("text")
      //                   .attr('y', r * 0.16)
      //                   .style("text-anchor", "middle")

      // vis.append("svg:circle")
      //       .attr("r", r * 0.6)
      //       .style("fill", "rgba(0,0,0,.1)")
      //       .on("mouseenter", function(d) {
      //           d3.select(this)
      //             .attr("stroke","rgba(0,0,0,.12")
      //             .transition()
      //             .attr("r", r * 0.63)
      //             .attr("stroke-width",1);

                
      //       })
      //       .on("mouseleave", function(d) {
      //           d3.select(this)
      //             .transition()            
      //             .attr("r", r * 0.6)
      //             .ease("bounce")
      //             .duration(500)
      //             .attr("stroke","none");

      //           // centerText.text( "" );
      //           // centerText2.text( "" );
      //           // centerText3.text( "" );
      //           totalUploaded=[];
      //           totalUnconflated=[];
      //       });
    
      // vis.append('text')
      //       .attr('class', 'center-txt value')
      //       .attr('y', r * -0.2)
      //       .attr('text-anchor', 'middle')
      //       .style('font-weight', 'bold')
      //       .text("MIDB Database Totals")

      // centerText.text(function(d) {  
      //               allCats = d.length + " Catcodes";
      //               return allCats
      //           })
      //           centerText2.text(function(d) {
      //               for (a = 0; a < d.length; a++) {
      //                 totalUploaded.push(d[a].total);
      //               };
      //               allUploads = eval(totalUploaded.join("+")) + " Total Uploads";  
      //               return allUploads;
      //           })
      //           centerText3.text(function(d) {
      //               for (a = 0; a < d.length; a++) {
      //                 totalUnconflated.push(d[a].unconflated);
      //               };
      //               allConflated = eval(totalUploaded.join("+")) - eval(totalUnconflated.join("+"));
      //               allConflated = "[ " + allConflated + " Conflated ]";  
      //               return allConflated;
      //           })

      
      // data.forEach(function (d) {
      //           d.total = +d.total;
      //           d.enabled = true; 
      //       });

      // var legendRectSize = 18;
      // var legendSpacing = 4;
      // var legend = vis.selectAll('.legend')
      //           .data(color.domain())
      //           .enter()
      //           .append('g')
      //           .attr('class', 'legend')
      //           .attr('transform', function (d, i) {
      //           var height = legendRectSize + legendSpacing;
      //           var offset = height * color.domain().length / 2;
      //           var horz =  legendRectSize + 198;
      //           var vert = i * height + 80;
      //           return 'translate(' + horz + ',' + vert + ')';
      //           });

      //       legend.style("visibility", function(d) {
      //         return  d == 42500 || 
      //                 d == 41150 || 
      //                 d == 44100 || 
      //                 d == 49610 ||
      //                 d == 49620 || 
      //                 // d == 45320 || 
      //                 // d == 49640 || 
      //                 // d == 45700 ||
      //                 // d == 77400 || 
      //                 // d == 77611 || 
      //                 // d == 45100 || 
      //                 // d == 43410 || 
      //                 // d == 77613 ||
      //                 // d == 77612 || 
      //                 // d == 44200 || 
      //                 // d == 49630 || 
      //                 // d == 42000 ||
      //                 // d == 80010 ||
      //                 // d == 45970 || 
      //                 d == 77200 ? "visible" : "hidden"
      //       });
              
      //       legend.append('rect')
      //           .attr('width', legendRectSize)
      //           .attr('height', legendRectSize)
      //           .style('fill', color)
      //           .style('stroke', color)
      //       .on('click', function (midb_cat) { 
      //           var rect = d3.select(this); 
      //           var enabled = true; 
      //           var totalEnabled = d3.sum(data.map(function (d) { 
                    
      //               return (d.enabled) ? 1 : 0; 

      //           })); 

      //           if (rect.attr('class') === 'disabled') { 
      //               rect.attr('class', ''); 
      //           } else { 
      //               if (totalEnabled < 2) return; 
      //               rect.attr('class', 'disabled'); 
      //               enabled = false; 
      //           }

      //           pie.value(function (d) { 
      //               if (d.midb_cat === midb_cat) d.enabled = enabled; 
      //               return (d.enabled) ? d.total : 0; 
      //           }); 

      //           arcs = arcs.data(pie(data));
                
      //           arcs.transition() 
      //           .duration(750) 
      //           .attrTween('d', function (d) { 
      //               var interpolate = d3.interpolate(this._current, d);
      //               // console.log(d); 
      //               this._current = interpolate(0); 
      //               return function (t) { 
      //                   return arc(interpolate(t)); 
      //               }; 
      //           }); 
      //       }); 

      //       legend.append('text')
      //           .attr('x', legendRectSize + legendSpacing)
      //           .attr('y', legendRectSize - legendSpacing)
      //           .text(function (d) {
      //             return d;
      //           });
        

//////////// END Donut Graph END ///////////////










