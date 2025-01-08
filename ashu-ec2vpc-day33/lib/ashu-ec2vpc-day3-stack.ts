import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AshuEc2VpcDay3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // using default vpc 
    const vpc = ec2.Vpc.fromLookup(this,'ashuvpc',{
      isDefault: true
    });
    // creating ec2 instance
    const ashuvm = new ec2.Instance(this,'ashuvm1',{
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      keyPair: ec2.KeyPair.fromKeyPairName(this,'ashukey','splunk-key'),
      //       splunk-key is original key name of aws account
      // so you have to use the same
      instanceName: 'ashu-linux-vm'
      // above name of my linux machine 
    });
    // printing instance ID 
    new cdk.CfnOutput(this,'ashuInstanceID',{
      description: 'this will print instance id',
      value: ashuvm.instanceId,
    });
    // printing public dns 
    new cdk.CfnOutput(this,'ashuvmpublicdns',{
      value: ashuvm.instancePublicIp
    });
  }
}
