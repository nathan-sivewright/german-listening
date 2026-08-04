document.querySelectorAll('[data-card]').forEach(function(card){
  var audio = card.querySelector('[data-player]');
  var speedBtns = card.querySelectorAll('.speed-btn');
  var revealBtn = card.querySelector('[data-reveal]');
  var questions = card.querySelector('[data-questions]');

  speedBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      audio.playbackRate = parseFloat(btn.dataset.speed);
      speedBtns.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
  revealBtn.addEventListener('click', function(){
    questions.classList.toggle('show');
    revealBtn.textContent = questions.classList.contains('show') ? 'Hide questions' : 'Show questions';
  });
});

var copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
  copyBtn.addEventListener('click', function(){
    var blocks = [];
    document.querySelectorAll('[data-card]').forEach(function(card){
      var id = card.querySelector('.id-badge').textContent.trim();
      var title = card.querySelector('.card-title').textContent.trim();
      var lines = ['### Listening ' + id + ' — ' + title, ''];
      card.querySelectorAll('[data-questions] li').forEach(function(li, i){
        lines.push((i + 1) + '. ' + li.textContent.trim());
        lines.push('Your answer: ');
        lines.push('');
      });
      blocks.push(lines.join('\n'));
    });
    var text = blocks.join('\n');
    navigator.clipboard.writeText(text).then(function(){
      var original = copyBtn.textContent;
      copyBtn.textContent = 'Copied — paste into Obsidian';
      copyBtn.classList.add('copied');
      setTimeout(function(){
        copyBtn.textContent = original;
        copyBtn.classList.remove('copied');
      }, 2200);
    });
  });
}
