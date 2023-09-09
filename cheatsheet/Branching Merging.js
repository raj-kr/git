/**
 * Managing branches
 * git branch bugfix                                    #Creates a new branch called bugfix
 * git checkout bugfix                                  #Switches to the bugfix branch
 * git switch bugfix                                    #Same as above
 * git switch -C bugfix                                 #Creates and switches
 * git branch -d bugfix                                 #Delete the bugfix branch
 * 
 * Comparing branches
 * git log master..bugfix                               #Lists the commits in the bugfix branch not in master
 * git diff master..bugfix                              #Shows the summary of changes
 * 
 * Stashing
 * git stash push -m 'New tax rules'                    #Create a new stash
 * git stash list                                       #Lists all the stashes
 * git stash show stash@{1}                             #Shows the given stash
 * git stash show 1                                     #Shortcut for stash@{1}
 * git stash apply 1                                    #Applies the given stash to the working dir
 * git stash drop 1                                     #Deletes the given stash
 * git stash clear                                      #Deletes all the stashes
 * 
 * Merging
 * git merge bugfix                                     #Merges the bugfix branch into the current branch
 * git merge --no-ff bugfix                             #Creates a merge commit even if FF is possible
 * git merge --squash bugfix                            #Performs a squash merge
 * git merge --abort                                    #Aborts the merge
 * 
 * Viewing the merged branches
 * git branch --merged                                  #Shows the merged branches
 * git branch --no-merged                               #Shows the unmerged branches
 * 
 * Rebasing
 * git rebase master                                    #Changes the base of the current branch
 * 
 * Cherry Picking
 * git cherry-pick dad47ed                              #Applies the given commit on the current branch
 * 
 * 
 */