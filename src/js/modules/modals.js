const modals = (modalSelector, btnsModal, btnCloseSelector) => {
  const modal = document.querySelector(modalSelector),
    btns = document.querySelectorAll(btnsModal),
    btnClose = document.querySelector(btnCloseSelector),
    block = document.querySelector('.popup__chefs-block'),
    cards = block.children;

  let arrBlocks = [],
    newArrBlocks = [];

  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      generateModal(btn);
      openModal();
    });
  });

  function getCopyBlocks() {
    Array.from(cards).forEach(item => {
      arrBlocks.push(item);
      item.remove();
    });
  }

  function getDublicateBlocks() {
    for (let i = 0; i < arrBlocks.length; i++) {
      newArrBlocks[i] = arrBlocks[i];
    }
  }

  function generateModal(btn) {
    let id = btn.getAttribute('id') - 1;
    
    getDublicateBlocks();

    if (id === 0) {
      newArrBlocks = newArrBlocks.splice(newArrBlocks.length - 1).concat(newArrBlocks);
    } else if (id === 1) {
      newArrBlocks = newArrBlocks;
    } else if (id > 0) {
      newArrBlocks = newArrBlocks.splice(-id).concat(newArrBlocks);
    }

    newArrBlocks.forEach(item => {
      block.appendChild(item);
    });
  }

  function closeModal() {
    modal.classList.remove('fadeIn');
    modal.style.display = 'none';
    document.body.classList.remove('_lock');

    Array.from(cards).forEach(item => {
      item.classList.remove('showFromLeft');
      item.classList.remove('showFromRight');
      item.classList.remove('hideToLeft');
      item.classList.remove('hideToRight');
    });
  }

  function openModal() {
    modal.classList.add('fadeIn');
    modal.style.display = 'block';
    document.body.classList.add('_lock');
  }

  btnClose.addEventListener('click', () => {
    closeModal();
  });

  getCopyBlocks();
  
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__chefs')) {
      closeModal();
    }
  });
};

export default modals;