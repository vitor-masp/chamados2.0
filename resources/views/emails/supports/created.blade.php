@component('mail::message')
<div>
    <p>Olá! {{(date('H') >= 12 && date('H') < 18) ? 'Boa tarde.' : ((date('H') >= 18 && date('H') < 23) ? 'Boa noite.' : 'Bom dia.')}}</p>
    <p>Um novo chamado foi aberto sob o número <b>#{{ $support->id }}</b>.</p>
    <p>Status: <b>{{ $support->status == 0 ? 'Concluído' : ($support->status == 1 ? 'Aberto' : ($support->status == 2 ? 'Andamento' : 'Recusado')) }}</b></p>
    <p>Solicitante: <b>{{ $support->user->name }}</b></p>
    <p>Serviço: <b>{{ $support->service->name }}</b></p>
    <p>Descrição: <b>{{ $support->description }}</b></p>
</div>
<div>
    <p>Acesse pelo link:</p>
    <strong><a href="{{ route('chamado.show', $support->id) }}">{{ route('chamado.show', $support->id) }}</a></strong><br>
</div>
<div>
    <p class="text-muted">Atte. equipe {{ config('app.name') }}</p>
</div>
@endcomponent
