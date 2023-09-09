/**
 * Viewing the history
 * git log --stat                                       #Shows the list of modified files
 * git log --patch                                      #Shows the actual changes(patches)
 * 
 * Filtering the history
 * git log -3                                           #Shows the last 3 entries
 * git log --author="Mosh"                              
 * git log --before="2020-08-17"
 * git log --after="one week ago"
 * git log --grep="GUI"                                 #Commits with "GUI" in their message
 * git log -S"GUI"                                      #Commits with "GUI" in their patches
 * git log hash1..hash2                                 #Range of commits
 * git log file.txt                                     #Commits that touched file.txt
 * 
 * Formatting the log output
 * git log --pretty=format:"%an commited %H"
 * 
 * Creating an alias
 * git config --global alias.lg "log --oneline"
 * 
 * Viewing a commit
 * git show HEAD~2
 * git show HEAD~2:file.txt
 * 
 * Comparing commits
 * git diff HEAD~2 HEAD
 * git diff HEAD~2 HEAD file.txt
 * 
 * Checing out a commit
 * git checkout dad47ed                                 #Check out the given commit
 * git checkout master                                  #Checks out the master branch
 * 
 * Finding a bad commit
 * git bisect start
 * git bisect bad                                       #Marks the current commit as a bad commit
 * git bisect good ca49180                              #Marks the given commit as a good commit
 * git biset reset
 * 
 * Finding contributores
 * git shortlog
 * 
 * Viewing the history of a file
 * git log file.text                                    #Shows the commit that touched file.txt
 * git log --stat file.txt                              #Shows statistics(the number of changes) for file.txt
 * git log --patch file.txt                             #Shows the patches(changes) applied to file.txt
 * 
 * Finding the author of lines
 * git blame file.txt                                   #Shows the author of each line in file.txt
 * 
 * Tagging
 * git tag v1.0                                         #Tags the last commit as v1.0
 * git tag v1.0 5e7a828                                 #Tags an earlier commit
 * git tag                                              #Lists all the tags
 * git tag -d v1.0                                      #Delete the given tag
 */