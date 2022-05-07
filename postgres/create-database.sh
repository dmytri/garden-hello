#!/bin/sh
sleep 15
psql --no-password \
  'CREATE DATABASE onedev' \
  && echo created database onedev \
  || echo failed to create database onedev
