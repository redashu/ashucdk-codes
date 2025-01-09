#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AshuDay4BestwayStack } from '../lib/ashu-day4-bestway-stack';
import { AshuDay4ec2all } from '../lib/ashu-day4-ec2all';

const app = new cdk.App();
new AshuDay4BestwayStack(app, 'AshuDay4BestwayStack', {
  
  // env: { account: '123456789012', region: 'us-east-1' },
});

new AshuDay4ec2all(app, 'AshuDay4ec2all', {
  
  env: { account: '992382386705', region: 'us-east-1' },
});