const log = (msg) => console.log(`🐶 ${msg}`);

const hasPaywall = () => {
  return document.querySelector('#serviceplusPaywallpaywall-container');
}

const bust = () => {
  const paywallContent = document.querySelector('.paywall-content');
  const paywallContainer = document.querySelector('#serviceplusPaywallpaywall-container');
  log('Barking at the paywall');
  paywallContent.style.height = 'auto';
  paywallContainer.remove();
}

const busted = () => {
  const paywallContent = document.querySelector('.paywall-content');
  return paywallContent.style.height === 'auto';
}

const runBuster = () => {
  log('Buster is here, woof woof!');

  const timer = setInterval(() => {
    log('Running timer');
    if (hasPaywall()) {
      bust();

      if (busted()) {
        clearInterval(timer);
      }
    }
  }, 1E3);
}

runBuster();
