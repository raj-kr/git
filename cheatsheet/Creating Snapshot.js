/**
 * Initializing a repository
 * --git init
 * 
 * Staging Files
 * --git add file.js                                #staging a single file
 * --git add file1.js file2.js                      #stages multiple files
 * --git add *.js                                   #stages with pattern
 * --git add .                                      #stages current directory and all its content
 * 
 * Viewing the status
 * --git status                                     #full status
 * --git status -s                                  #short status
 * 
 * Committing the staged files
 * --git commit -m 'Message'                        #commits with a one-line message
 * --git commit                                     #opens the default editor to type a long message
 * 
 * Skipping the staging area
 * git commit -am 'Message'                         
 * 
 * Removing files
 * git rm file1.js                                  #Remove from working directory and staging area
 * git rm --cached file.js                          #Removes from staging area only
 * 
 * Renaming or moving files
 * git mv file1.js file.txt                         
 * 
 * Viewing the staged/unstaged changes
 * git diff                                         #shows unstaged changes
 * git diff --staged                                #shows staged changes
 * git diff --cached                                #same as the above
 * 
 * Viewing the history
 * git log                                          #full history
 * git log --oneline                                #summary
 * git log --reverse                                #lists the comits from the oldest to the newest
 * 
 * Viewing a commit
 * git show 921a2ff                                 #Shows the given commit
 * git show HEAD                                    #Shows the last commit
 * git show HEAD~2                                  #two steps before the last commit
 * git show HEAD:file.js                            #Shows the version of file.js stored in the last commit
 * 
 * Unstaging files(undoing git add)
 * git restore --staged file.js                     #Copies the last version of file.js from repo to index
 * 
 * Discarding local changes
 * git restore file.js                              #Copies file.js from index.js to working directory
 * git restore file1.js file2.js                    #Restore multiple files in working directory
 * git restore                                      #Discards all local changes (except untracked files)
 * git clean -fd                                    #Removes all untracked files
 * 
 * Restoring an earlier version of a file
 * git restore --source=HEAD~2 file.js
 * 
 */