### Reference: https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git

Undoing a commit is a little scary if you don't know how it works. But it's actually amazingly easy if you do understand. I'll show you the 4 different ways you can undo a commit.

Say you have this, where C is your HEAD and (F) is the state of your files.

   (F)
A-B-C
    ↑
  master
Option 1: git reset --hard
You want to destroy commit C and also throw away any uncommitted changes. You do this:

git reset --hard HEAD~1
The result is:

 (F)
A-B
  ↑
master
Now B is the HEAD. Because you used --hard, your files are reset to their state at commit B.

Option 2: git reset
Maybe commit C wasn't a disaster, but just a bit off. You want to undo the commit but keep your changes for a bit of editing before you do a better commit. Starting again from here, with C as your HEAD:

   (F)
A-B-C
    ↑
  master
Do this, leaving off the --hard:

git reset HEAD~1
In this case the result is:

   (F)
A-B-C
  ↑
master
In both cases, HEAD is just a pointer to the latest commit. When you do a git reset HEAD~1, you tell Git to move the HEAD pointer back one commit. But (unless you use --hard) you leave your files as they were. So now git status shows the changes you had checked into C. You haven't lost a thing!

Option 3: git reset --soft
For the lightest touch, you can even undo your commit but leave your files and your index:

git reset --soft HEAD~1
This not only leaves your files alone, it even leaves your index alone. When you do git status, you'll see that the same files are in the index as before. In fact, right after this command, you could do git commit and you'd be redoing the same commit you just had.

Option 4: you did git reset --hard and need to get that code back
One more thing: Suppose you destroy a commit as in the first example, but then discover you needed it after all? Tough luck, right?

Nope, there's still a way to get it back. Type this

git reflog
and you'll see a list of (partial) commit SHAs (that is, hashes) that you've moved around in. Find the commit you destroyed, and do this:

git checkout -b someNewBranchName shaYouDestroyed
You've now resurrected that commit. Commits don't actually get destroyed in Git for some 90 days, so you can usually go back and rescue one you didn't mean to get rid of.