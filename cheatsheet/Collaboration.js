/**
 * Cloning a repository
 * git clone url
 * 
 * Syncing with remotes
 * git fetch origin master                                  #fetches master from origin
 * git fetch origin                                         #Fetchs all objects from origin
 * git fetch                                                #Shortcut for "git fetch origin"
 * git pull                                                 #fetch + merge
 * git push origin master                                   #Pushes master to origin
 * git push                                                 #shortcut for git push push master
 * 
 * Sharing tags
 * git push origin v1.0                                     #Pushes tag v1.0 to origin
 * git push origin --delete v1.0
 * 
 * Sharing branches
 * git branch -r                                            #Shows remote tracking branches
 * git branch -vv                                           #Shows local & remote tracking branches
 * git push -u origin bugfix                                #Pushes bugfix to origin
 * git push -d origin bugfix                                #Removes bugfix from origin
 * 
 * Managing remotes
 * git remote                                               #SHows remote repos
 * git remote add upstream url                              #Adds a new remote called upstream
 * git remote rm upstream                                   #Remotes upstream
 *   
 */