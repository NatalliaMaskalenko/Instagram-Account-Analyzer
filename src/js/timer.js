class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = targetDate;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.updateTimer(this.getRefs());
    }, 1000);
  }

  getRefs() {
    const container = document.querySelector("#timer-1");
    const hoursEl =container.querySelector('[data-value="hours"]');
    const minsEl = container.querySelector('[data-value="mins"]');
    return { container, hoursEl, minsEl };
  }

  updateTimer({ container, hoursEl, minsEl }) {
    const time = this.targetDate - Date.now();
    if (time <= 0) {
      clearInterval(this.intervalId);
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
      return;
    }
    hoursEl.textContent = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    minsEl.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");   
  }
}

const timer = new CountdownTimer(new Date("Apr 21, 2022 13:00:00"));

timer.start();