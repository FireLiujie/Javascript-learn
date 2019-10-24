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