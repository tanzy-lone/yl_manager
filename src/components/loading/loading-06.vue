<template>
	<div class="spinner"></div>
</template>
<style scoped>
.spinner {
	display: grid;
	width: 56px;
	height: 56px;
	border: 4.5px solid #0000;
	border-color: #dbdcef #0000;
	border-radius: 50%;
	animation: spinner-e04l1k 1s infinite linear;
}

.spinner::before,
.spinner::after {
	content: '';
	grid-area: 1/1;
	margin: 2.2px;
	border: inherit;
	border-radius: 50%;
}

.spinner::before {
	border-color: #474bff #0000;
	animation: inherit;
	animation-duration: 0.5s;
	animation-direction: reverse;
}

.spinner::after {
	margin: 8.9px;
}

@keyframes spinner-e04l1k {
	100% {
		transform: rotate(1turn);
	}
}
</style>
