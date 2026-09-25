// Reuse original local assets. Add matching skill labels here when adding logos.
// Concepts without an image remain readable text cards.
const icons = {
  C: require("../assets/images/c.png"),
  "C++": require("../assets/images/cp.png"),
  Python: require("../assets/images/python.png"),
  Java: require("../assets/images/java.png"),
  SQL: require("../assets/images/sql.png"),
  ESP32: require("../assets/images/esp32.jpg"),
  "Raspberry Pi": require("../assets/images/raspberry.png"),
  Arduino: require("../assets/images/arduino.png"),
  BLE: require("../assets/images/ble.webp"),
  MQTT: require("../assets/images/mqtt.png"),
  "AWS IoT Core": require("../assets/images/awsiot.jpeg"),
  Lambda: require("../assets/images/lambda.png"),
  EC2: require("../assets/images/ec2.jpeg"),
  DynamoDB: require("../assets/images/dynamodb.jpg"),
  RDS: require("../assets/images/rds.png"),
  "AWS S3": require("../assets/images/s3.jpeg"),
  "Azure IoT": require("../assets/images/azureiot.png"),
  gRPC: require("../assets/images/grpc.png"),
  REST: require("../assets/images/restapi.jpg"),
  Datadog: require("../assets/images/datadog.png"),
  Docker: require("../assets/images/docker.webp"),
  "Android(Native)": require("../assets/images/android.png"),
  Notion: require("../assets/images/notion.png"),
  GitHub: require("../assets/images/git.jpg"),
  Figma: require("../assets/images/figma.png")
};
const aliases = {
  "AWS IoT": "AWS IoT Core",
  "AWS Lambda": "Lambda",
  "AWS EC2": "EC2",
  "AWS DynamoDB": "DynamoDB",
  "AWS RDS": "RDS",
  "Azure IoT Hub": "Azure IoT",
  "REST API": "REST",
  RaspberryPi: "Raspberry Pi"
};
export const getSkillImage = name => icons[aliases[name] || name];
