import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AshuDay4ec2all extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // define your all codes here only
     // using default vpc 
     const vpc = ec2.Vpc.fromLookup(this,'ashuvpc',{
        isDefault: true
      });

    // creating security group
    const securityGroup = new ec2.SecurityGroup(this, 'ashuSecurityGroup', {
      vpc,
      allowAllOutbound: true,
      securityGroupName: 'ashu-sg'
    });
    // allow inbound traffic on port 443 (HTTPS) from anywhere
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow HTTPS traffic');
    // allow inbound traffic on port 80 (HTTP) from anywhere
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow HTTP traffic');

    // allow inbound traffic on port 22 (SSH) from anywhere
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'Allow SSH traffic');
    // allow inbound traffic on port 21 (FTP) from anywhere
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(21), 'Allow FTP traffic');
      // creating ec2 instance
    const ashuvm = new ec2.Instance(this,'ashuvm1',{
        vpc,
        instanceType: new ec2.InstanceType('t2.micro'),
        machineImage: new ec2.AmazonLinuxImage(),
        keyPair: ec2.KeyPair.fromKeyPairName(this,'ashukey','splunk-key'),
        securityGroup: securityGroup,
        instanceName: 'ashu-linux-vm'
        // above name of my linux machine 
      });
  }
}
