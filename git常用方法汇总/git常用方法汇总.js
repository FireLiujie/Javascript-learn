/**
 * 使用git pull 从远程仓库“同步”代码，通常有三种方式；
 * git pull origin <remote_branch>:<local_branch>
 * git pull origin <remote_branch>
 * git pull
 */

/**
 * git pull origin <remote_branch>:<local_branch>
 * 场景：当本地的当前分支不是local_branch
 * 作用：将远程分支拉取到指定本地分支
 * 例子：当前分支是dev,但是你想把远程master同步到本地master，但又不想使用checkout切换到master分支，这是就可以使用：
 * git pull origin master:master
 */

/**
 * git pull origin <remote_branch>
 * 场景：在当前分支上进行同步操作
 * 作用：将指定远程分支同步到当前本地分支
 * git pull origin master
 */

/**
 * git pull
 * 场景：本地分支已经和想要拉取的分支建立了“关联”关系
 * 作用：拉取所有远程分支的新版本“坐标”，并同步当前分支的本地代码（具体根据关联分支而定）
 */

/**
 * git branch -vv
 * 查看目前分支的“关联”情况
 */

/**
 * git push
 * 场景：当前分支已经有关联分支，并且关联分支与当前分支同名
 * 作用：将当前分支代码同步到远程同名分支
 */

/**
 * git push origin <local_branch>
 * 场景：同步指定分支（非当前分支）到远程分支，如果当前分支则<local_branch>可以省略
 * 作用：同步指定的本地分支到远程关联同名分支
 */

/**
 * git push origin <local_branch>:<remote_branch>
 * 场景：将本地分支推送到远程不同名的分支
 * 作用：将指定的本地分支推送到指定的远程分支（这两个分支并没有建立关联关系，且可以不同名）
 * 例如：git push origin dev:master
 * 同步本地的dev和远端的master分支，这样同步后本地的master分支可能会落后远程master分支
 */

/**
 * git log
 * 查看日志
 * git log --oneline
 * 把每一个提交压缩到一行中
 * 需要注意的是，查看后想退出查看日志仅需要输入q即可
 */

/**
 * git tag <name>用于新建一个标签，默认为HEAD，也可以指定一个commit id
 * git tag 查看所有标签
 * git tag -a <tagname> -m "message" 可以指定标签信息
 */

/**
 * git tag -d <tagname>可以删除一个本地标签
 * git push origin <tagname>可以推送一个本地标签
 * git push origin --tags 可以推送全部未推送过的本地标签
 * git push origin :refs/tags/<tagname>可以删除一个远程标签
 *
 * 因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。
 * 如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除，然后从远程删除，删除命令也是push
 * 例如：git push origin :refs/tags/v1.0
 */

/**
 * HEAD指向的版本就是当前版本，因此，git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id
 * 穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本
 * 要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本
 */

/**
 * git branch 查看分支
 * git branch <name>创建分支
 * git checkout <name> 或者 git switch <name> 切换分支
 * git checkout -b <name> 或者 git switch -c <name>创建+切换分支
 * git merge <name> 合并某分支到当前分支
 * git branch -d <name> 删除分支
 */

/**
 * git stash
 * 注意：这个功能十分好用
 * 当手头工作没有完成时，先把工作现场git stash 一下，然后去修复bug，修复后，再git stash pop，回到工作现场
 *
 * git cherry-pick <commit>
 * 在master分支上修复的bug，想要合并到当前dev分支，可以用git cherry-pick <commit>命令，把bug提交的修复“复制”到当前分支，避免重复劳动
 */
