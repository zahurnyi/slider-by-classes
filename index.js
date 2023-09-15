"use strict";
document.body.style.background = '#6c6c6c';

class Buttons {
	constructor(parentElement, elementType = "button", text, bgColor, className) {
		this.element = document.createElement(elementType);
		this.element.textContent = text;
		this.element.style.background = bgColor;
		this.element.classList.add(className);
		parentElement.append(this.element);
	}
}

class Slider {
	constructor(parentElement, images) {
		this.parentElement = parentElement;
		this.images = images;
		this.currentIndex = 0;
		this.slideContainer = document.createElement("div");
		this.slideContainer.classList.add("slider-container");
		this.parentElement.append(this.slideContainer);
		this.renderSlider()
		
		this.prevButton = new Buttons(parentElement, 'button', 'prev', 'gray', 'button');
		this.nextButton = new Buttons(parentElement, 'button', 'next', 'green', 'button');
		this.prevButton.element.onclick = () => this.prevSlide();
		this.nextButton.element.onclick = () => this.nextSlide();

	}

	renderSlider() {
		this.slideContainer.innerHTML = '';
		const imgElement = document.createElement('img');
		imgElement.src = this.images[this.currentIndex];
		imgElement.alt = 'photo';	
		imgElement.style.height = '100%'
		imgElement.style.width = '100%'
		this.slideContainer.append(imgElement);
	}

	nextSlide() {
		if (this.currentIndex < this.images.length - 1) {
    this.currentIndex++;
  	} else {
  	  this.currentIndex = 0;
  	}
  	this.renderSlider();
	}
	prevSlide() {
		if (this.currentIndex > 0) {
			this.currentIndex--
		} else {
			this.currentIndex = this.images.length - 1;
		}
		this.renderSlider();
	}
}

const images = [
	'img/img-1.jpg',
	'img/img-2.jpg',
	'img/img-3.jpg',
	'img/img-4.jpg',
	'img/img-5.jpg',
	'img/img-6.jpg',
	'img/img-7.jpg',
	'img/img-8.jpg',
	'img/img-9.jpg',
	'img/img-10.jpg',
	'img/img-11.jpg',
	'img/img-12.jpg',
	'img/img-13.jpg',
	'img/img-14.jpg',
	'img/img-15.jpg',
	'img/img-16.jpg',
	'img/img-17.jpg',
	'img/img-18.jpg',
	'img/img-19.jpg',
	'img/img-20.jpg',
	'img/img-21.jpg',
	'img/img-22.jpg',
	'img/img-23.jpg',
	'img/img-24.png',
	'img/img-25.jpg',
	'img/img-26.jpg',
	'img/img-27.jpg',
	'img/img-28.jpg',
	'img/img-29.jpg',
	'img/img-30.jpg',
	'img/img-31.jpg',
	'img/img-32.jpg',
	'img/img-33.jpg',
	'img/img-34.jpg',
	'img/img-35.jpg',
	'img/img-36.jpg',
	'img/img-37.jpg',
	'img/img-38.jpg',
	'img/img-39.jpg',
	'img/img-40.jpg',
	'img/img-41.jpg',
	'img/img-42.jpg',
	'img/img-43.jpg',
	'img/img-44.jpg',
];

const sliderContainer = new Slider(document.body, images);