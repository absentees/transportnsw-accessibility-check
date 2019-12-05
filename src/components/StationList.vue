<template>
    <ul>
      <li v-for="edge in $static.allTrainStation.edges" :key="edge.node.id">
        {{ edge.node.name }} : <span v-if="edge.node.wheelchairAccess">true</span><span v-else>false</span>
        
      </li>
    </ul>
</template>

<static-query>
query {
  allTrainStation (sortBy: "name", order: ASC) {
    edges {
      node {
        id,
        name,
        wheelchairAccess
      }
    }
  }
}
</static-query>