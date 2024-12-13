import { HTMLUpdater, Observer } from './observer';

const main = () => {
  const message: HTMLTextAreaElement = document.querySelector('#message')!;
  const counter: HTMLParagraphElement = document.querySelector('#counter')!;
  const copy: HTMLButtonElement = document.querySelector('#copy')!;

  copy.onclick = () => {
    message.placeholder = '';
    navigator.clipboard.writeText(message.value);
  }


  const updater = new HTMLUpdater();
  const observerTextArea = new Observer(
    (data: string) => {
      const chars = data.split('').length.toString();
      counter.innerHTML = chars;
      if ( Number(chars) === 250) counter.classList.add('is-at-limit');
    }
  );

  updater.addSubscriber( observerTextArea);
  
  message.addEventListener('input', () => {
    updater.notifySubscribers( message.value );
  });
};
main();