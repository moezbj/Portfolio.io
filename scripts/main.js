var navLinks = document.querySelectorAll('nav a')
var firstLink = navLinks[0]
var html = document.querySelector('html')

function linkToHash (link) {
  return link.hash
}

firstLink.onclick = function (event) {
  event.preventDefault()
  var targetDiv = document.querySelector('#exp ')
  $(html).animate(
    {
      scrollTop: targetDiv.offsetTop
    },
    1000
  )
}
var secondLink = navLinks[1]
var html = document.querySelector('html')

function linkToHash (link) {
  return link.hash
}

secondLink.onclick = function (event) {
  event.preventDefault()
  var targetDiv = document.querySelector('#port ')
  $(html).animate(
    {
      scrollTop: targetDiv.offsetTop
    },
    1000
  )
}
var thirdLink = navLinks[2]
var html = document.querySelector('html')

function linkToHash(link) {
  return link.hash
}

thirdLink.onclick = function (event) {
  event.preventDefault()
  var targetDiv = document.querySelector('#callme ')
  $(html).animate(
    {
      scrollTop: targetDiv.offsetTop
    },
    1000
  )
}
var fourthLink = navLinks[3]
var html = document.querySelector('html')

function linkToHash (link) {
  return link.hash
}

fourthLink.onclick = function(event) {
  event.preventDefault()
  var targetDiv = document.querySelector('#about ')
  $(html).animate(
    {
      scrollTop: targetDiv.offsetTop
    },
    1000
  )
}