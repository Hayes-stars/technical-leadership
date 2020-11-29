require(['gitbook', 'jQuery'], function(gitbook, $) {

  var dataLevel = []

  var TOGGLE_CLASSNAME = 'expanded',
      CHAPTER = '.chapter',
      ARTICLES = '.articles',
      TRIGGER_TEMPLATE = '<i class="exc-trigger fa"></i>',
      LS_NAMESPACE = 'expChapters';
  var init = function (dataLevelArr) {
    dataLevel = dataLevelArr
    // adding the trigger element to each ARTICLES parent and binding the event
    $(ARTICLES)
      .parent(CHAPTER)
      .children('a')
      .append(
        $(TRIGGER_TEMPLATE)
          .on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggle($(e.target).closest(CHAPTER));
          })
      );
    expand(lsItem());
    //expand current selected chapter with it's parents
    var activeChapter = $(CHAPTER + '.active');
    expand(activeChapter);
    expand(activeChapter.parents(CHAPTER));
  }

  var toggle = function ($chapter) {
    if ($chapter.hasClass('expanded')) {
      collapse($chapter);
    } else {
      expand($chapter);
    }
  }
  var collapse = function ($chapter) {
    if ($chapter.length && $chapter.hasClass(TOGGLE_CLASSNAME)) {
      $chapter.removeClass(TOGGLE_CLASSNAME);
      lsItem($chapter);
    }
  }
  var expand = function ($chapter) {
    if ($chapter.length && !$chapter.hasClass(TOGGLE_CLASSNAME)) {
      $chapter.addClass(TOGGLE_CLASSNAME);
      lsItem($chapter);
    }
  }
  var lsItem = function () {
    var map = JSON.parse(localStorage.getItem(LS_NAMESPACE)) || {}
    if (arguments.length) {
      var $chapters = arguments[0];
      $chapters.each(function (index, element) {
        var level = $(this).data('level');
        var value = $(this).hasClass(TOGGLE_CLASSNAME);
        map[level] = value;
      })
      localStorage.setItem(LS_NAMESPACE, JSON.stringify(map));
    } else {
      return $(CHAPTER).map(function(index, element){
        if (dataLevel.indexOf($(this).data('level') + '') !== -1 ) {
          $(element).hide()
        }
        if (map[$(this).data('level')]) {
          return this;
        }
      })
    }
  }
  gitbook.events.bind('page.change', function() {
    const dataLevel = gitbook.state.config.pluginsConfig['expandable-chapters']['data-level'] || []
    init(dataLevel)
  });
});
