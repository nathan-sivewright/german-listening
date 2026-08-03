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
