/**
 * 方法一：
 * 查看80端口是否被占用
 * sudo lsof -i :80
 *
 * 方法二：
 * netstat -anp tcp | grep 80
 *
 * 如下命令可以直接结束占用端口的所有进程：
 * lsof -P | grep ':80' | awk '{print $2}' | xargs kill -9
 */
