export function getId(target) {
  return target.parentNode.getAttribute('data-id');
}

export function getMsgContainer(target) {
  return target.parentNode.parentNode.firstElementChild;
}

export function getEntryIdx(array, id) {
  return array.findIndex(item => item.id === +id);
}

export function makeEditable(target) {
  const msgContainer = getMsgContainer(target);
  msgContainer.contentEditable = 'true';
  msgContainer.focus();
  target.parentNode.firstElementChild.classList.remove('btn--hidden');
  target.classList.add('btn--hidden');
}

export function makeUneditable(target) {
  const msgContainer = getMsgContainer(target);
  msgContainer.contentEditable = 'false';
  target.classList.add('btn--hidden');
  target.parentNode.children[1].classList.remove('btn--hidden');
}
