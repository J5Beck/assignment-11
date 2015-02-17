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

      $subTree = buildTree(item.children);
      $rootLi.append($subTree);
      
    }  

    $rootUl.append($rootLi);

  });

  return $rootUl
};
