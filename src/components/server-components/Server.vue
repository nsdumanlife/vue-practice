<template>
    <div>
        <li class="list-group-item"> 
            Sunucu #{{ serverData.id }}
            <p>Durumu: <strong>{{ serverData.status }}</strong> </p>        
        </li>
    </div>
</template>

<script>

export default {
    name:'Server',
    props: ['serverData']
}
</script>