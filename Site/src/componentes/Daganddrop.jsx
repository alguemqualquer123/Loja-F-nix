import React, { useEffect, useState } from 'react';
import { DivDaganddrop } from '../css/Daganddrop';

export const Daganddrop = () => {
  const [draggedItem, setDraggedItem] = useState(null);

  useEffect(() => {
    const dragItems = document.querySelectorAll('.drag');
    const dropBoxes = document.querySelectorAll('.drop__item');

    function dragOver(e) {
      e.preventDefault();
      this.classList.add('enter');
    }

    function dropEvent(e) {
      e.preventDefault();
      this.classList.remove('enter');

      const targetContainer = e.currentTarget;
      const draggedItemId = draggedItem.id;
      const existingItem = targetContainer.querySelector('.drag');

      if (existingItem) {
        // Swap positions
        draggedItem.innerText = existingItem.innerText;
        existingItem.innerText = e.dataTransfer.getData('text/plain');
      } else {
        // Move to empty container
        const elemento = document.createElement('p');
        elemento.className = 'drag';
        elemento.innerText = e.dataTransfer.getData('text/plain');
        targetContainer.appendChild(elemento);
      }

      setDraggedItem(null);
    }

    function dragLeave(e) {
      e.preventDefault();
      this.classList.remove('enter');
    }

    function dragStart(e) {
      setDraggedItem(e.target);
      e.dataTransfer.setData('text/plain', e.target.innerText);

      setTimeout(() => {
        this.classList.add('invisible');
      }, 0);
    }

    // Drag Events
    dragItems.forEach(item => {
      item.addEventListener('dragstart', dragStart);
    });

    // Drop Events
    dropBoxes.forEach(box => {
      box.addEventListener('dragover', dragOver);
      box.addEventListener('drop', dropEvent);
      box.addEventListener('dragleave', dragLeave);
    });

    // Cleanup Event Listeners on component unmount
    return () => {
      dragItems.forEach(item => {
        item.removeEventListener('dragstart', dragStart);
      });

      dropBoxes.forEach(box => {
        box.removeEventListener('dragover', dragOver);
        box.removeEventListener('drop', dropEvent);
        box.removeEventListener('dragleave', dragLeave);
      });
    };
  }, [draggedItem]); // Add draggedItem as a dependency

  return (
    <DivDaganddrop>
      <div className="drag__container">
        <div className="drag__item"><p id="1" className="drag" draggable={true}>1</p></div>
        <div className="drag__item"><p id="2" className="drag" draggable={true}>2</p></div>
        <div className="drag__item"><p id="3" className="drag" draggable={true}>3</p></div>
        <div className="drag__item"><p id="4" className="drag" draggable={true}>4</p></div>
        <div className="drag__item"><p id="5" className="drag" draggable={true}>5</p></div>
        <div className="drag__item"><p id="6" className="drag" draggable={true}>6</p></div>
      </div>
    </DivDaganddrop>
  );
};