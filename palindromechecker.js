function palindrome(str) {
  str = str.replace(/[\\\/()\s,._-]/gi, '')
  str = str.toLowerCase()
  return str == str.split("").reverse().join("")
}

palindrome("eye");
