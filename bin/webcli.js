#!/usr/bin/env node

'use strict';
var program = require('commander');
var fs = require('fs');
var path = require('path');
var PATH = process.cwd(); //命令行当前目录
var _PATH = path.join(__dirname, '../templates'); //templates下的目录

program
    .version('1.0.0');//声明版本号
// program
//     .command('list')//声明有一个命令叫list
//     .description('list files in current working directory')//给出list这个命令的描述
//     .option('-a, --all', 'Whether to display hidden files')//设置list这个命令的参数
//     .action(function(options) {//list命令的实现体
//         var fs = require('fs');
//         //获取当前运行目录下的文件信息
//         fs.readdir(process.cwd(), function(err, files) {
//             var list = files;
//             if (!options.all) {//检查用户是否给了--all或者-a的参数，如果没有，则过滤掉那些以.开头的文件
//                 list = files.filter(function(file) {
//                     return file.indexOf('.') !== 0;
//                 });
//             }
//             console.log(list.join(' '));//控制台将所有文件名打印出来
//         });
//     });
program
    .command('new <name>')//声明有一个命令叫new并有一个参数name
    .description('create a new project')//给出new这个命令的描述
    .action(function (name) {//new命令的实现体
        console.log('Create a new project "%s"', name);
        PATH = path.join(PATH + '/' + name);
        mkdir(PATH, function () { //根据名字新建项目目录
            console.log('project path: ', PATH, '\n');
            createTemplate(_PATH + '\\');
        })
    });
program.parse(process.argv);//开始解析用户输入的命令﻿​

//复制文件
function copyFile(from, to) {
    from = path.join(__dirname, '../templates', from);
    fs.writeFileSync(to, fs.readFileSync(from, 'utf-8'));
}

//新建文件夹
function mkdir(path, fn) {
    fs.mkdir(path, function (err) {
        fn && fn()
    })
}

//把templates目录下的文件转移到对方项目目录
function createTemplate(path) {
    var files = fs.readdirSync(path);
    files.forEach(function (item, index) {
        var stat = fs.statSync(path + item);
        if (stat.isDirectory()) {
            let filepath = PATH + (path + item + '\\').replace(_PATH, '');
            // console.log(filepath);
            mkdir(filepath, function () {
                // console.log(filepath + '   ok!');
                //递归读取文件
                createTemplate(path + item + '\\');
            });
        } else {
            let filepath = (path + item + '\\').replace(_PATH, '');
            filepath = filepath.substr(0, filepath.length - 1);
            // console.log('file!------------------' + filepath);
            copyFile(filepath, PATH + filepath)
        }
    });
}