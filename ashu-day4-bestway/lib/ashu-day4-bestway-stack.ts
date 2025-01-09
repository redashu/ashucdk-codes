import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AshuDay4BestwayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // define an array with 2 bucket names 
    const bucketNames = ['ashu-day4-bestway-bucket11', 'ashu-day4-bestway-bucket22'];
    // using for loop to create 2 buckets
    for (let i = 0; i < bucketNames.length; i++) {
      new s3.Bucket(this, `MyBucket${i}`, {
        versioned: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        autoDeleteObjects: true, 
        bucketName: bucketNames[i]
      });
    }
  //   // creating s3 bucket 
  // const bucket = new s3.Bucket(this, 'MyBucket', {
  //   versioned: true,
  //   removalPolicy: cdk.RemovalPolicy.DESTROY,
  //   autoDeleteObjects: true, 
  //   bucketName: 'ashu-day4-bestway-buckettt'
  // });
  }
}
