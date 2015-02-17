$(function(){

  $.ajax("data.json", {
    success: function(data) {
      var tree = buildTree(data);
        $("body").html(tree);
    }
  });
});

var  buildTree = function(data) {
  var $rootUl;

  $rootUl = $("<ul />");

  _.each(data, function(item){
    var $innerUL, $innerLi, innerData; $twoInnerUL, $twoInnerLi, twoInnerData; 

    $rootLi = $("<li />");
    $rootLi.append("<span>" + item.name + "</span>");

    if (item.children) {

      innerData = item.children;
      $innerUl = $("<ul />");

        _.each(innerData, function(innerItem) {
          $innerLi = $("<li />");
          $innerLi.append("<span>" + innerItem.name + "</span>")
          $innerUl.append($innerLi);

            if (item.children) {

              twoInnerData = item.children;
              $twoInnerUL = $("<ul />");

                _.each(twoInnerData, function(innerItem) {
                  $twoInnerLi = $("<li />");
                  $twoInnerLi.append("<span>" + innerItem.name + "</span>")
                  $twoInnerUL.append($twoInnerLi);
                  

              });

              $rootLi.append($twoInnerUL);

              }

            $rootUl.append($rootLi);
        });    

      });

      $rootLi.append($innerUl);

      }

    $rootUl.append($rootLi);

  });

  return $rootUl
}
