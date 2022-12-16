Place for converting your data into visual representations using d3 and svelte.

How will I dockerize this application? 

- Write a Docker file that 
  a) Pulls the node:18_alpine OS which has node installed in it. 
  b) Since the Dockerfile is in the same directory as that of package.json, this file will be copied first. 
  c) Along with that additional folders and config files needs to be copied depending on the JS library that is used. 
  d) The data which is required for showcasing the main concept is also uploaded
  e) The nodemodules can be sent along too, this will avoid further downloads requirement. (Trying this)
