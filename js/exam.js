(function () {
  const PHASE_LABELS = {
    define: "Define 定义",
    measure: "Measure 测量",
    analyze: "Analyze 分析",
    improve: "Improve 改进",
    control: "Control 控制"
  };

  const state = {
    questions: [],
    answers: {},
    current: 0,
    startedAt: null,
    durationSec: 0,
    timerId: null,
    submitted: false
  };

  // ----- DOM -----
  const setupEl = document.getElementById("setup");
  const examEl = document.getElementById("exam");
  const resultsEl = document.getElementById("results");

  document.getElementById("start-btn").addEventListener("click", startExam);

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickQuestions(count, phase) {
    let pool = QUESTIONS;
    if (phase && phase !== "all") {
      pool = QUESTIONS.filter(q => q.phase === phase);
    }
    return shuffle(pool).slice(0, Math.min(count, pool.length));
  }

  function startExam() {
    const count = parseInt(document.getElementById("num-questions").value, 10);
    const minutes = parseInt(document.getElementById("duration").value, 10);
    const phase = document.getElementById("phase-filter").value;

    state.questions = pickQuestions(count, phase);
    state.answers = {};
    state.current = 0;
    state.startedAt = Date.now();
    state.durationSec = minutes * 60;
    state.submitted = false;

    setupEl.hidden = true;
    resultsEl.hidden = true;
    examEl.hidden = false;

    renderQuestion();
    startTimer();
  }

  function startTimer() {
    if (state.timerId) clearInterval(state.timerId);
    updateTimer();
    state.timerId = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
    const remaining = Math.max(0, state.durationSec - elapsed);
    const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
    const ss = String(remaining % 60).padStart(2, "0");
    const timerEl = document.getElementById("timer");
    timerEl.textContent = `${mm}:${ss}`;
    if (remaining <= 60) {
      timerEl.classList.add("warning");
    } else {
      timerEl.classList.remove("warning");
    }
    if (remaining === 0) {
      clearInterval(state.timerId);
      submitExam();
    }
  }

  function renderQuestion() {
    const idx = state.current;
    const q = state.questions[idx];
    const total = state.questions.length;
    document.getElementById("progress").innerHTML =
      `第 <strong>${idx + 1}</strong> / ${total} 题 <span>· ${PHASE_LABELS[q.phase] || q.phase}</span>`;

    const letters = ["A", "B", "C", "D", "E", "F"];
    const selectedIdx = state.answers[q.id];
    const optionsHtml = q.options.map((opt, i) => {
      const selected = selectedIdx === i ? " selected" : "";
      return `
        <label class="option${selected}" data-index="${i}">
          <input type="radio" name="opt-${q.id}" value="${i}" ${selectedIdx === i ? "checked" : ""}>
          <span class="option-letter">${letters[i]}.</span>
          <span class="option-text">${opt}</span>
        </label>
      `;
    }).join("");

    document.getElementById("question").innerHTML = `
      <div class="question-number">Question ${idx + 1}<span class="question-tag">${PHASE_LABELS[q.phase]}</span></div>
      <div class="question-text">${q.question}</div>
      <div class="options">${optionsHtml}</div>
    `;

    document.querySelectorAll(".option").forEach(el => {
      el.addEventListener("click", () => {
        const i = parseInt(el.dataset.index, 10);
        state.answers[q.id] = i;
        renderQuestion();
      });
    });

    document.getElementById("prev-btn").disabled = idx === 0;
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");
    if (idx === total - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
    } else {
      nextBtn.style.display = "inline-block";
      submitBtn.style.display = "none";
    }
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    if (state.current > 0) {
      state.current--;
      renderQuestion();
    }
  });
  document.getElementById("next-btn").addEventListener("click", () => {
    if (state.current < state.questions.length - 1) {
      state.current++;
      renderQuestion();
    }
  });
  document.getElementById("submit-btn").addEventListener("click", () => {
    const unanswered = state.questions.filter(q => state.answers[q.id] === undefined).length;
    if (unanswered > 0) {
      if (!confirm(`还有 ${unanswered} 道题未作答，确定提交吗？`)) return;
    }
    submitExam();
  });

  function submitExam() {
    if (state.submitted) return;
    state.submitted = true;
    if (state.timerId) clearInterval(state.timerId);

    let correct = 0;
    const perPhase = {};
    state.questions.forEach(q => {
      if (!perPhase[q.phase]) perPhase[q.phase] = { total: 0, correct: 0 };
      perPhase[q.phase].total++;
      if (state.answers[q.id] === q.answer) {
        correct++;
        perPhase[q.phase].correct++;
      }
    });

    const total = state.questions.length;
    const pct = Math.round((correct / total) * 100);
    const pass = pct >= 70;
    const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
    const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const ss = String(elapsed % 60).padStart(2, "0");

    const breakdownHtml = Object.keys(perPhase).map(k => {
      const p = perPhase[k];
      return `
        <div class="breakdown-item">
          <div class="breakdown-label">${PHASE_LABELS[k] || k}</div>
          <div class="breakdown-value">${p.correct}/${p.total}</div>
        </div>
      `;
    }).join("");

    document.getElementById("results").innerHTML = `
      <div class="score-circle ${pass ? "pass" : "fail"}">
        <div class="score-number">${pct}%</div>
        <div class="score-label">${pass ? "PASS" : "KEEP GOING"}</div>
      </div>
      <h2>${correct} / ${total} 答对</h2>
      <p class="results-summary">用时 ${mm}:${ss} · 通过线 70%</p>
      <div class="results-breakdown">${breakdownHtml}</div>
      <div class="results-actions">
        <button class="btn btn-primary" id="review-btn">查看解析</button>
        <button class="btn btn-secondary" id="restart-btn">再来一套</button>
      </div>
      <div id="review-container" style="text-align: left; margin-top: 32px;"></div>
    `;

    examEl.hidden = true;
    resultsEl.hidden = false;

    document.getElementById("restart-btn").addEventListener("click", () => {
      resultsEl.hidden = true;
      setupEl.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("review-btn").addEventListener("click", renderReview);
  }

  function renderReview() {
    const letters = ["A", "B", "C", "D", "E", "F"];
    const container = document.getElementById("review-container");
    container.innerHTML = state.questions.map((q, idx) => {
      const user = state.answers[q.id];
      const optionsHtml = q.options.map((opt, i) => {
        let cls = "";
        if (i === q.answer) cls = " correct";
        else if (i === user) cls = " wrong";
        return `
          <div class="option${cls}">
            <span class="option-letter">${letters[i]}.</span>
            <span class="option-text">${opt}</span>
          </div>
        `;
      }).join("");
      const userText = user === undefined ? "未作答" : letters[user];
      return `
        <div class="question-card">
          <div class="question-number">Q${idx + 1}<span class="question-tag">${PHASE_LABELS[q.phase]}</span></div>
          <div class="question-text">${q.question}</div>
          <div class="options">${optionsHtml}</div>
          <div class="explanation">
            <strong>解析</strong>
            你的答案：${userText} · 正确答案：${letters[q.answer]}<br>
            ${q.explanation}
          </div>
        </div>
      `;
    }).join("");
    document.getElementById("review-btn").style.display = "none";
  }
})();
