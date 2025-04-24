//Moda LetMeBeYourWomb
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal_LetMeBeYourWomb');
    const modal_cataclasm = document.getElementById('modal_Cataclasm');
    const modal_Dysphoria = document.getElementById('modal_Dysphoria');
    const modal_Exuvium = document.getElementById('modal_Exuvium');
    const modal_Widow = document.getElementById('modal_Widow');
    const modal_Ghosts = document.getElementById('modal_Ghosts');
    const modal_Skeletons = document.getElementById('modal_Skeletons');
    const modal_Runaway = document.getElementById('modal_Runaway');
    const modal_ominiviolence = document.getElementById('modal_ominiviolence');
    const modal_Angels = document.getElementById('modal_Angels');
    const modal_LostTapes = document.getElementById('modal_LostTapes');
    const modal_NotToBeHere = document.getElementById('modal_NotToBeHere');

    modal.addEventListener('hidden.bs.modal', function () {
      const iframe = modal.querySelector('iframe');
      const src = iframe.src;
      iframe.src = '';        // Limpa o src
      setTimeout(() => {
        iframe.src = src;     // Reatribui com um pequeno delay
      }, 100); // Delay ajuda a garantir o reset
    });    
    modal_cataclasm.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_cataclasm.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      }); 
      modal_Dysphoria.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_Dysphoria.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });
      modal_Exuvium.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_Exuvium.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });
      modal_Widow.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_Widow.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });   

      modal_Ghosts.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_Ghosts.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });  

      modal_Skeletons.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_Skeletons.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });  

      modal_Runaway.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_Runaway.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });  

      modal_ominiviolence.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_ominiviolence.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });  

      modal_Angels.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_Angels.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });  

      modal_LostTapes.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_LostTapes.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });  

      modal_NotToBeHere.addEventListener('hidden.bs.modal', function () {
        const iframe = modal_NotToBeHere.querySelector('iframe');
        const src = iframe.src;
        iframe.src = '';        // Limpa o src
        setTimeout(() => {
          iframe.src = src;     // Reatribui com um pequeno delay
        }, 100); // Delay ajuda a garantir o reset
      });  
      
  });



  // Mostrar o botão após rolar um pouco
window.addEventListener('scroll', function() {
  const button = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

// Rolar suavemente para o topo
document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});